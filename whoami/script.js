window.onload = (event) => {
  console.log("loaded");
  document.getElementById("titlebar").innerHTML = "...";
  animatetitle(
    document.getElementById("textside").innerHTML,
    0.5,
    false,
    "textside",
  );
  checkmobile();
};
