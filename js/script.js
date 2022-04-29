AOS.init({
  offset: 300,
});

var spreker1naam = "Woerdeman";
var spreker1 = document.getElementsByClassName("spreker1naam");
for (let i = 0; i < spreker1.length; i++) {
  spreker1[i].innerHTML = spreker1naam;
}

var spreker2naam = "Tristan";
var spreker2 = document.getElementsByClassName("spreker2naam");
for (let i = 0; i < spreker2.length; i++) {
  spreker2[i].innerHTML = spreker2naam;
}

document.querySelector("#play").addEventListener("click", openPodcast);

function openPodcast() {
  document.querySelector("article").style.display = "none";
  document.querySelector("#slomer").style.display = "none";
  document.querySelector("header").scrollIntoView();
  document.querySelector("#podcast").style.opacity = "1";
  AOS.refresh();

  var tween = gsap.to(window, {
    duration: 200,
    scrollTo: ".laatste",
    ease: "none",
    paused: "true",
  });

  tween.play();

  document.querySelector("#sneller").addEventListener("click", toonSneller);

  function toonSneller() {
    var tween = gsap.to(window, {
      duration: 80,
      scrollTo: ".laatste",
      ease: "none",
      paused: "true",
    });

    document.querySelector("#sneller").style.display = "none";
    document.querySelector("#slomer").style.display = "block";

    tween.pause();
    tween.resume();
  }

  document.querySelector("#slomer").addEventListener("click", toonSlomer);

  function toonSlomer() {
    var tween = gsap.to(window, {
      duration: 200,
      scrollTo: ".laatste",
      ease: "none",
      paused: "true",
    });

    document.querySelector("#sneller").style.display = "block";
    document.querySelector("#slomer").style.display = "none";

    tween.pause();
    tween.resume();
  }
}
