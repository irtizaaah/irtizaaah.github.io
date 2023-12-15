const buttonTheme = document.getElementById("button-theme");
const body = document.body;

// Function to toggle the theme
const toggleTheme = () => {
  body.classList.toggle("theme-dark");
  const isDarkTheme = body.classList.contains("theme-dark");
  // Save the theme preference to localStorage
  localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
};
// Event listener to toggle the theme on button click
buttonTheme.addEventListener("click", toggleTheme);

// Check for the theme preference in localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("theme-dark");
  }
});