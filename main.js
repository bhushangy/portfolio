/*
So this is how the flow is. By default website is in dark mode. And this is not due to the meta tag. 
Even if you remove that meta tagbrowser will still be in dark mode because of the styles that are applied 
in the css. The css and html gets loaded and processed first.So initailly website will be in dark mode. 
Then the script is requested by the browser to the server (Check in networks tab in dev tools).
Then js file starts executing. Now if preference is for light mode, then the corresponding class is
added and the colors change.So on first load, browser will add the default color specified in css 
file and then js script is executed and then the color changes if preference is for light mode. 
 */

document.querySelector("#toggle-theme").addEventListener("click", () => {
  document.documentElement.classList.toggle("light-theme");
});
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
if (prefersLight) {
  console.log("yes");
  document.documentElement.classList.add("light-theme");
}
document.querySelector("#scroll-down").addEventListener("click", () => {
  window.scrollTo({ top: document.querySelector("#about-me").offsetTop - 20 });
});
document.querySelector("#hire-me-form").addEventListener("submit", (e) => {
  e.preventDefault();
});
