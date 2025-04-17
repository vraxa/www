window.onload = (event) => {
  console.log("loaded");
  document.getElementById("titlebar").innerHTML = "...";
  animatetitle(
    document.getElementById("projects").innerHTML,
    3,
    false,
    "projects",
  );
  checkmobile();
};
