window.onload = () => {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("overlay").style.opacity = "1";
  document.getElementById("warning").style.cssText =
    "transform: translate(-50%, -50%) scale(1);";
};
document.addEventListener("click", (e) => {
  if (e.target.id === "close") {
    e.target.parentElement.style.cssText =
      "transform: translate(-50%, -50%) scale(0);";
    document.getElementById("overlay").remove();
  }
});
