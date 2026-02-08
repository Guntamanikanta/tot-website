function enterSite() {
  localStorage.setItem("ageVerified", "true");
  document.getElementById("age-gate").style.display = "none";
}

window.onload = function () {
  if (localStorage.getItem("ageVerified")) {
    document.getElementById("age-gate").style.display = "none";
  }
};
