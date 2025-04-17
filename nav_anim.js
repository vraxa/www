window.onload = (event) => {
  console.log("we're up");
  animatetitle("VXA.", 150, false, "titlebar");
  if (window.scrollY > 300) {
    console.log("stuck");
    nav.style.top = "-70";
    nav.style.opacity = "0.8";
    document.getElementById("reminder").style.opacity = 0;
    remindershown = true;
    changecontent(1);
    isnavsticky = true;
    checkmobile();
  }
};

const nav = document.getElementById("navbar");
let isnavsticky = false;
let remindershown = false;
let gonetotop = false;

function checkmobile() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    )
  ) {
    // true for mobile device
    document.getElementById("navbar").style.width = "80dvw";
    document.getElementById("titlebar").style.fontSize = "1.5em";
    document.getElementById("titlecontainer").style.paddingTop = "1%";
    document.getElementById("blinker").style.fontSize = "1.5em";
  } else {
    // false for not mobile device
    console.log("not mobile device");
  }
}

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

let test = [
  ":)",
  ";-;",
  "hello!",
  "o_o",
  "I.I",
  ":D",
  ":(",
  "welcome!",
  "hm?",
  "Yeah, Right!",
  "woah!",
  "../../../../..",
  "rm -rf /*",
];

let lock = false;
let timer = null;
let blinkytimer = null;
let hovering = false;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function animatetitle(text, time, back, target) {
  lock = true;
  arr = text.split("");
  let stage = 0;
  hovering = false;
  let ccstring = "";
  let backstr = document.getElementById(target).innerHTML;
  timer = setInterval(typetext, time, text, back);

  function typetext(x, back) {
    if (!back) {
      ccstring = ccstring + x[stage];
      document.getElementById(target).innerHTML = ccstring;
      if (stage == arr.length - 1) {
        clearInterval(timer);
        gonetotop = false;
        lock = false;
      } else {
        stage++;
      }
    } else {
      ccstring = backstr.substring(0, backstr.length - stage);
      document.getElementById(target).innerHTML = ccstring;
      if (stage == backstr.length) {
        clearInterval(timer);
        hovering = true;
        lock = false;
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
    if (blinkon && !lock) {
      document.getElementById("blinker").style.opacity = 0;
      blinkon = false;
      let r = getRandomInt(100);
      if (r > 10 && hovering) {
        clearInterval(timer);
        animatetitle(test[0], 40, true, "titlebar");
        clearInterval(timer);
        let rngtest = getRandomInt(test.length);
        if (rngtest == 9) {
          nav.style.border = "3px dashed lime";
        }
        animatetitle(test[rngtest], 50, false, "titlebar");
      } else if (
        r > 20 &&
        document.getElementById("titlebar").innerHTML != "VXA."
      ) {
        clearInterval(timer);
        animatetitle(test[0], 40, true, "titlebar");
        clearInterval(timer);
        nav.style.border = "3px dashed white";
        animatetitle("VXA.", 50, false, "titlebar");
      }
    } else {
      document.getElementById("blinker").style.opacity = 1;
      blinkon = true;
    }
  }
}

blinky();
