window.onload = (event) => {
  console.log("loaded");
  document.getElementById("titlebar").innerHTML = "...";
  animatetitle(
    document.getElementById("contact").innerHTML,
    3,
    false,
    "contact",
  );
  checkmobile();
};
