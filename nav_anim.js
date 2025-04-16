window.onload = (event) => {
  console.log("we're up");
  animatetitle("VXA.", 150, false);
  if (window.scrollY > 300) {
    console.log("stuck");
    nav.style.top = "-70";
    nav.style.opacity = "0.8";
    document.getElementById("reminder").style.opacity = 0;
    remindershown = true;
    changecontent(1);
    isnavsticky = true;
  }
};

const nav = document.getElementById("navbar");
let isnavsticky = false;
let remindershown = false;
let gonetotop = false;

/*
window.addEventListener("scroll", (event) => {
  if (window.scrollY > 300 && !isnavsticky) {
    console.log("stuck");
    nav.style.top = "-70";
    nav.style.opacity = "0.8";
    document.getElementById("titlecontainer").style.paddingTop = "0%";
    document.getElementById("reminder").style.opacity = 0;
    document.getElementById("nav1").style.display = "flex";
    changecontent(1);
    isnavsticky = true;
  } else if (window.scrollY < 300 && isnavsticky) {
    console.log("unstuck");
    isnavsticky = false;
    document.getElementById("titlecontainer").style.paddingTop = "5%";
    document.getElementById("nav1").style.display = "none";
    nav.style.top = "10";
    nav.style.opacity = "1";
    changecontent(0);
  }
});
*/

let test = [":)", ";-;", "hello!", "o_o", "I.I", ":D", ":("];

let lock = false;
let timer = null;
let blinkytimer = null;
let hovering = false;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function changecontent(x) {
  let elements = document.querySelectorAll(".content");

  for (let i = elements.length - 1; i >= 0; --i) {
    elements[i].style.opacity = x;
  }
}

function focusbar() {
  clearInterval(timer);
  //document.getElementById("titlebar").innerHTML = "VXA?!";

  if (isnavsticky) {
    nav.style.opacity = "1";
    nav.style.top = "30";
    document.getElementById("titlecontainer").style.paddingTop = "5%";
  }

  hovering = true;
  animatetitle(test[0], 50, true);
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
    animatetitle("VXA.", 80, false);
  }
}

function smoothscroll(target) {
  document.getElementById(target).scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
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
  "click",
  function () {
    if (!gonetotop) {
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

document.getElementById("nav1").addEventListener(
  "click",
  function () {
    console.log("clicked");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    gonetotop = true;
    animatetitle("Welcome Back!", 30, false);
  },
  false,
);

document.getElementById("nav2").addEventListener(
  "click",
  function () {
    console.log("clicked");
    smoothscroll("whoami");
  },
  false,
);

document.getElementById("nav3").addEventListener(
  "click",
  function () {
    console.log("clicked");
    smoothscroll("contact");
  },
  false,
);
document.getElementById("nav4").addEventListener(
  "click",
  function () {
    console.log("clicked");
    smoothscroll("projects");
  },
  false,
);

document.getElementById("nav5").addEventListener(
  "click",
  function () {
    console.log("clicked");
    smoothscroll("blog");
  },
  false,
);

function animatetitle(text, time, back) {
  arr = text.split("");
  let stage = 0;
  hovering = false;
  let ccstring = "";
  let backstr = document.getElementById("titlebar").innerHTML;
  timer = setInterval(typetext, time, text, back);

  function typetext(x, back) {
    if (!back) {
      ccstring = ccstring + x[stage];
      document.getElementById("titlebar").innerHTML = ccstring;
      if (stage == arr.length - 1) {
        clearInterval(timer);
        gonetotop = false;
        lock = false;
      } else {
        stage++;
      }
    } else {
      ccstring = backstr.substring(0, backstr.length - stage);
      document.getElementById("titlebar").innerHTML = ccstring;
      if (stage == backstr.length) {
        clearInterval(timer);
        hovering = true;
      } else {
        stage++;
      }
    }
  }
}

function blinky() {
  let blinkon = false;
  blinkytimer = setInterval(blinkit, 1000);

  function blinkit() {
    if (blinkon) {
      document.getElementById("blinker").style.opacity = 0;
      blinkon = false;
      let r = getRandomInt(100);
      if (r > 50 && !remindershown) {
        document.getElementById("reminderarrows").style.opacity = 0.7;
        document.getElementById("reminderarrows").style.top = "88%";
        remindershown = true;
      }
      if (r > 10 && hovering) {
        clearInterval(timer);
        animatetitle(test[0], 40, true);
        clearInterval(timer);
        let rngtest = getRandomInt(test.length);
        if (rngtest == 9) {
          nav.style.border = "3px dashed lime";
        }
        animatetitle(test[rngtest], 50, false);
      } else if (
        r > 70 &&
        !hovering &&
        document.getElementById("titlebar").innerHTML != "VXA."
      ) {
        clearInterval(timer);
        animatetitle(test[0], 40, true);
        clearInterval(timer);
        nav.style.border = "3px dashed white";
        animatetitle("VXA.", 50, false);
      }
    } else {
      document.getElementById("blinker").style.opacity = 1;
      blinkon = true;
    }
  }
}

blinky();
