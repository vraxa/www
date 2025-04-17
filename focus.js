function focusbar() {
  clearInterval(timer);
  //document.getElementById("titlebar").innerHTML = "VXA?!";

  if (isnavsticky) {
    nav.style.opacity = "1";
    nav.style.top = "30";
    document.getElementById("titlecontainer").style.paddingTop = "5%";
  }

  hovering = true;
  animatetitle(test[0], 50, true, "titlebar");
}

function unfocusbar() {
  clearInterval(timer);
  hovering = false;
  nav.style.border = "3px dashed white";

  if (isnavsticky) {
    nav.style.top = "-70";
    nav.style.opacity = "0.8";
    document.getElementById("titlecontainer").style.paddingTop = "0%";
  }

  if (document.getElementById("titlebar").innerHTML != "VXA.") {
    animatetitle("VXA.", 80, false, "titlebar");
  }
}

nav.addEventListener(
  "mouseenter",
  function () {
    if (!isnavsticky) {
      focusbar();
    }
  },
  false,
);

nav.addEventListener(
  "mouseleave",
  function () {
    if (!gonetotop) {
      unfocusbar();
    }
  },
  false,
);
