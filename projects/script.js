window.onload = (event) => {
  console.log("loaded");
  document.getElementById("titlebar").innerHTML = "...";

  checkmobile();
};

const gridbox = document.getElementsByClassName("gridbox");

function hoversetup() {
  for (var i = 0; i < gridbox.length; i++) {
    let select = i;
    let lastSeen = "";
    gridbox[i].addEventListener(
      "mouseenter",
      function () {
        let push = document
          .getElementsByClassName("gridbox")
          [select].getElementsByClassName("textpush");
        lastSeen = push[0].innerHTML;
        push[0].innerHTML = "/ " + lastSeen;
        for (var i = 0; i < push.length; i++) {
          push[i].style.paddingLeft = "10%";
        }
      },
      false,
    );
    gridbox[i].addEventListener(
      "click",
      function () {
        let push = document
          .getElementsByClassName("gridbox")
          [select].getElementsByClassName("textpush");
        for (var i = 0; i < push.length; i++) {
          push[i].style.paddingLeft = "10%";
        }
      },
      false,
    );

    gridbox[i].addEventListener(
      "mouseleave",
      function () {
        let push = document
          .getElementsByClassName("gridbox")
          [select].getElementsByClassName("textpush");
        push[0].innerHTML = lastSeen;
        for (var i = 0; i < push.length; i++) {
          push[i].style.paddingLeft = "5%";
        }
      },
      false,
    );
  }
}

hoversetup();
