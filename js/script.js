AOS.init({
    offset: 300,
});


var spreker1naam = "Hans"
var spreker1 = document.getElementsByClassName("spreker1naam");
for (let i = 0; i < spreker1.length; i++) {
    spreker1[i].innerHTML = spreker1naam;
}

var spreker2naam = "Tristan"
var spreker2 = document.getElementsByClassName("spreker2naam");
for (let i = 0; i < spreker2.length; i++) {
    spreker2[i].innerHTML = spreker2naam;
}

document.querySelector("#pauze").addEventListener("click", () => {
    document.querySelector("#pauze").style.display = "none";
    document.querySelector("#hervat").style.display = "block";
});

document.querySelector("#hervat").addEventListener("click", () => {
    document.querySelector("#pauze").style.display = "block";
    document.querySelector("#hervat").style.display = "none";
});


document.querySelector("#play").addEventListener("click", openPodcast);

function openPodcast() {
    document.querySelector("article").style.display = "none";
    document.querySelector("#slomer").style.display = "none";
    document.querySelector("header").scrollIntoView();
    document.querySelector("#podcast").style.opacity = "1";
    AOS.refresh()

    var tween = gsap.to(window, {
        duration: 170,
        scrollTo: ".laatste",
        ease: "none",
        paused: "true"
    });

    tween.play();

    var indicator = TweenMax.to("#indicator", 170, {
        bottom: 0,
        ease: Power2.easeInOut,
        yoyo: true,
        paused: true
    })

    indicator.play();

    document.querySelector("#pauze").addEventListener("click", () => {
        tween.pause()
        indicator.pause();
    });

    document.querySelector("#hervat").addEventListener("click", () => {
        tween.resume();
        indicator.play();
    });



    document.querySelector("#sneller").addEventListener("click", toonSneller);

    function toonSneller() {
        var tween = gsap.to(window, {
            duration: 40,
            scrollTo: ".laatste",
            ease: "none",
            paused: "true"
        });

        var indicator = TweenMax.to("#indicator", 40, {
            bottom: 0,
            ease: Power2.easeInOut,
            yoyo: true,
            paused: true
        })
        indicator.play();

        document.querySelector("#sneller").style.display = "none";
        document.querySelector("#slomer").style.display = "block";

        tween.pause();
        tween.resume();
        document.querySelector("#pauze").addEventListener("click", () => {
            tween.pause();
            indicator.pause();
        });
        document.querySelector("#hervat").addEventListener("click", () => {
            tween.resume(); indicator.resume;
        });
    }

    document.querySelector("#slomer").addEventListener("click", toonSlomer);


    function toonSlomer() {
        var tween = gsap.to(window, {
            duration: 170,
            scrollTo: ".laatste",
            ease: "none",
            paused: "true"
        });

        var indicator = TweenMax.to("#indicator", 170, {
            bottom: 0,
            ease: Power2.easeInOut,
            yoyo: true,
            paused: true
        })
        indicator.play();

        document.querySelector("#sneller").style.display = "block";
        document.querySelector("#slomer").style.display = "none";

        tween.pause();
        tween.resume();
        document.querySelector("#pauze").addEventListener("click", () => {
            tween.pause()
            indicator.pause();

        });
        document.querySelector("#hervat").addEventListener("click", () => {
            tween.resume()
            indicator.resume();
        });
    }

    document.querySelector("#restart").addEventListener("click", () => {
        tween.restart();
        document.querySelector("#pauze").style.display = "block";
        document.querySelector("#hervat").style.display = "none";
    });


}
