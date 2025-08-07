// Assume recipes variable is loaded (from recipes.js)

const dishTitleEl = document.getElementById("dishTitle");
const dishMainContent = document.getElementById("dishMainContent");

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
  renderDish(id);
}

// Parse ID from URL query param 'id'
function getIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id") || "", 10);
}

// Render dish detail page
function renderDish(id) {
  const recipe = recipes.find((r) => r.id === id);
  if (!recipe) {
    dishTitleEl.textContent = "Recipe Not Found";
    dishMainContent.innerHTML = "<p>Sorry, the requested recipe does not exist.</p>";
    return;
  }

  dishTitleEl.textContent = recipe.name;

  const favoriteClass = isFavorite(id) ? "favorited" : "";
  const favoriteText = isFavorite(id) ? "Remove from Favorites ❤️" : "Add to Favorites 🤍";

  const quickBadgeHTML = recipe.prepTime <= 30
    ? `<span class="quick-badge" style="display:inline-block;margin-left:12px;">Quick!</span>`
    : "";

  dishMainContent.innerHTML = `
    <img
      src="${recipe.image}"
      alt="Image of ${recipe.name}"
      style="width:230px; border-radius:20px; box-shadow: 0 0 28px rgba(150,0,250,0.45); margin-bottom:25px;"
    />
    <p><strong>Category:</strong> ${capitalize(recipe.category)}${quickBadgeHTML}</p>
    <p><strong>Preparation Time:</strong> ${recipe.prepTime} minutes</p>
    <p><strong>Ingredients:</strong></p>
    <ul>${recipe.ingredients.map((ing) => `<li>${ing}</li>`).join("")}</ul>
    <p><strong>Instructions:</strong></p>
    <p style="white-space: pre-wrap;">${recipe.instructions}</p>
    <button id="favBtn" class="${favoriteClass}" style="
      margin-top: 28px;
      background:#ff6b81; color:#fff; font-size:1.2rem; font-weight:700;
      padding: 14px 30px; border:none; border-radius: 24px;
      box-shadow: 0 0 38px #ff6b8199; cursor:pointer; 
      transition: all 0.3s ease;"
      aria-pressed="${isFavorite(id)}"
      >${favoriteText}</button>
  `;

  document.getElementById("favBtn").addEventListener("click", () => {
    toggleFavorite(id);
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const dishId = getIdFromURL();
renderDish(dishId);