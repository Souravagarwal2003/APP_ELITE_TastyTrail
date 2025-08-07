// recipes variable assumed loaded via <script src="recipes.js"></script>

const recipesContainer = document.getElementById("recipesContainer");
const categoryFilter = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchInput");
const favoriteCountEl = document.getElementById("favoriteCount");

function getFavorites() {
  const favs = localStorage.getItem("favoriteRecipes");
  return favs ? JSON.parse(favs) : [];
}

function setFavorites(arr) {
  localStorage.setItem("favoriteRecipes", JSON.stringify(arr));
}

function isFavorite(id) {
  return getFavorites().includes(id);
}

function toggleFavorite(id) {
  let favs = getFavorites();
  if (favs.includes(id)) {
    favs = favs.filter((x) => x !== id);
  } else {
    favs.push(id);
  }
  setFavorites(favs);
  renderRecipes();
  updateFavoriteCount();
  favoriteCountAnimation();
}

function updateFavoriteCount() {
  favoriteCountEl.textContent = `❤️ ${getFavorites().length}`;
}

function favoriteCountAnimation() {
  favoriteCountEl.classList.add("pop");
  setTimeout(() => favoriteCountEl.classList.remove("pop"), 500);
}

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlightMatch(text, searchTerm) {
  if (!searchTerm) return text;
  const regex = new RegExp(`(${escapeRegExp(searchTerm)})`, "gi");
  return text.replace(regex, `<span class="highlight">$1</span>`);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function renderRecipes() {
  const category = categoryFilter.value;
  const searchTermRaw = searchInput.value.trim();
  const searchTerm = searchTermRaw.toLowerCase();

  let filtered = recipes;

  if (category !== "all") {
    if (category === "quick") {
      filtered = filtered.filter((r) => r.prepTime <= 30);
    } else {
      filtered = filtered.filter((r) => r.category === category);
    }
  }

  if (searchTerm !== "") {
    filtered = filtered.filter((r) => r.name.toLowerCase().includes(searchTerm));
  }

  recipesContainer.innerHTML = "";
  if (filtered.length === 0) {
    recipesContainer.innerHTML = "<p>No recipes found.</p>";
    return;
  }

  filtered.forEach((recipe) => {
    const a = document.createElement("a");
    a.classList.add("recipe-card");
    a.href = `dish.html?id=${recipe.id}`;
    a.setAttribute("tabindex", "0");
    a.setAttribute("aria-label", `View details for ${recipe.name}`);
    a.dataset.id = recipe.id;

    const quickBadgeHTML = recipe.prepTime <= 30
      ? `<span class="quick-badge">Quick</span>`
      : "";

    // Highlight search
    const highlightedName = highlightMatch(recipe.name, searchTermRaw);

    const favoriteClass = isFavorite(recipe.id) ? "favorited" : "";

    a.innerHTML = `
      <img src="${recipe.image}" alt="Image of ${recipe.name}" />
      <h3>${highlightedName}</h3>
      <div class="category">${capitalize(recipe.category)}</div>
      <div class="prep-time">Prep Time: ${recipe.prepTime} min</div>
      ${quickBadgeHTML}
      <span class="favorite-icon ${favoriteClass}" title="Toggle favorite recipe">&#10084;</span>
    `;

    // Favorite toggle only for icon click
    const favIcon = a.querySelector(".favorite-icon");
    favIcon.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleFavorite(recipe.id);
    });

    recipesContainer.appendChild(a);
  });
}

categoryFilter.addEventListener("change", renderRecipes);
searchInput.addEventListener("input", renderRecipes);

renderRecipes();
updateFavoriteCount();