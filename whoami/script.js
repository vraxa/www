window.onload = (event) => {
  console.log("loaded");
  document.getElementById("titlebar").innerHTML = "...";
  let b = document.getElementById("textside").innerHTML;
  document.getElementById("textside").innerHTML = "";
  animatetitle(b, 0.5, false, "textside");
  checkmobile();
};
