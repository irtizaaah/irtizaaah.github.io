const buttonTheme = document.getElementById("button-theme");
const body = document.body;

// Function to toggle the theme
const toggleTheme = () => {
  body.classList.toggle("theme-dark");
  const isDarkTheme = body.classList.contains("theme-dark");
  localStorage.setItem("theme", isDarkTheme ? "dark" : "light"); // save the theme preference to localStorage
};

// Check for the theme preference in localStorage on page load
const setSavedTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("theme-dark");
  }
};

buttonTheme.addEventListener("click", toggleTheme);
document.addEventListener("DOMContentLoaded", setSavedTheme)