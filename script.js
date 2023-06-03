document.querySelector("#cookies-btn").addEventListener("click", () => {
  document.querySelector("#cookies-alert").style.display = "none";
  Cookies.set("consent", true, { expires: 30 });
});

if (Cookies.get("consent")) {
  document.querySelector("#cookies-alert").style.display = "none";
}
