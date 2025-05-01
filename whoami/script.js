window.onload = (event) => {
  console.log("loaded");
  document.getElementById("titlebar").innerHTML = "...";
  let b = document.getElementById("titlemove").innerHTML;
  document.getElementById("titlemove").innerHTML = " ";
  animatetitle(b, 35, false, "titlemove");
  checkmobile();
};
