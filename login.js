(function () {
      const formTitle = document.getElementById("form-title");
      const form = document.getElementById("auth-form");
      const toggleLink = document.getElementById("toggle-link");
      const usernameField = document.getElementById("username-field");
      const usernameInput = document.getElementById("username");
      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");
      const submitBtn = document.getElementById("submit-btn");
      const errorMessage = document.getElementById("error-message");
      const successMessage = document.getElementById("success-message");

      let isLogin = true;

      // Util functions
      function validateEmail(email) {
        const re =
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
      }

      function clearMessages() {
        errorMessage.textContent = "";
        successMessage.textContent = "";
      }

      function switchMode() {
        isLogin = !isLogin;
        clearMessages();
        if (isLogin) {
          formTitle.textContent = "Login";
          submitBtn.textContent = "Login";
          toggleLink.textContent = "Don't have an account? Sign up";
          toggleLink.setAttribute("aria-pressed", "false");
          usernameField.style.display = "none";
          usernameInput.value = "";
          passwordInput.autocomplete = "current-password";
          emailInput.autocomplete = "email";
        } else {
          formTitle.textContent = "Sign Up";
          submitBtn.textContent = "Sign Up";
          toggleLink.textContent = "Already have an account? Login";
          toggleLink.setAttribute("aria-pressed", "true");
          usernameField.style.display = "block";
          passwordInput.autocomplete = "new-password";
          emailInput.autocomplete = "email";
        }
        form.reset();
      }

      // Store users in localStorage (for demo purposes only)
      // Users stored as array of { username, email, password }
      function getUsers() {
        try {
          const users = localStorage.getItem("users");
          return users ? JSON.parse(users) : [];
        } catch (e) {
          return [];
        }
      }
      function saveUsers(users) {
        localStorage.setItem("users", JSON.stringify(users));
      }

      // Signup handler
      function handleSignup(username, email, password) {
        let users = getUsers();

        // Check if email already exists
        if (users.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
          errorMessage.textContent = "Email already registered.";
          return false;
        }

        // Check if username already exists
        if (
          users.find(
            (u) => u.username.toLowerCase() === username.toLowerCase()
          )
        ) {
          errorMessage.textContent = "Username already taken.";
          return false;
        }

        users.push({ username, email, password });
        saveUsers(users);
        successMessage.textContent = "Signup successful! You can now login.";
        return true;
      }

      // Login handler
      // Inside the handleLogin function, after successful login:
function handleLogin(email, password) {
  let users = getUsers();

  const user = users.find(
    (u) =>
      u.email.toLowerCase() === email.toLowerCase() &&
      u.password === password
  );
  if (!user) {
    errorMessage.textContent = "Invalid email or password.";
    return false;
  }

  // "Logged in" - For demo store current user
  localStorage.setItem("currentUser", JSON.stringify(user));
  window.location.href = "home.html"; // ✅ Corrected line

  return true;
}
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        clearMessages();

        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const username = usernameInput.value.trim();

        if (!validateEmail(email)) {
          errorMessage.textContent = "Please enter a valid email.";
          return;
        }
        if (password.length < 6) {
          errorMessage.textContent = "Password must be at least 6 characters.";
          return;
        }

        if (isLogin) {
          const success = handleLogin(email, password);
          if (success) {
            form.reset();
          }
        } else {
          if (username.length < 3) {
            errorMessage.textContent = "Username must be at least 3 characters.";
            return;
          }
          const success = handleSignup(username, email, password);
          if (success) {
            // Switch back to login automatically after short delay
            setTimeout(() => {
              switchMode();
            }, 2000);
          }
        }
      });

      toggleLink.addEventListener("click", switchMode);
      toggleLink.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          switchMode();
        }
      });
    })();