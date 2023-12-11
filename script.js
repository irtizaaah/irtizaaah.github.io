const buttonTheme = document.getElementById("button-theme");
const buttonMore = document.getElementById("about-more_button")
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
buttonMore.addEventListener("click", (event) => {
    var moreSummary = document.getElementById("about-more_summary");
    if (moreSummary.style.display === "none" || moreSummary.style.display === "") {
        moreSummary.style.display = "block";
        buttonMore.textContent = "Less";
    } else {
        moreSummary.style.display = "none";
        buttonMore.textContent = "More";
    }
});

var link = document.getElementById('toggle-link');
var isAbout = false;

const toggleLinkText = () => {
  isAbout = !isAbout;
  link.href = isAbout ? '#find-me' : '#about';
  link.textContent = isAbout ? 'About' : 'Find Me';
}
link.addEventListener('click', toggleLinkText);