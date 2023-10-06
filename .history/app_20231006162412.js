
gsap.to('.header', {
    scrollTrigger: {
        trigger: '.header',
        endTrigger: "footer",
        pin: true,
        // pinSpacing: 'padding', // or 'padding-box'
        markers: false,
        start: "top top",
        end: "bottom top"
    }
});

//Landing section
gsap.from('.hi', {ease: "power4",duration: 1.5, opacity: 0, x: '-100%', delay: 0});
gsap.from('.lemme', {ease: "power4",duration: 1.5, opacity: 0, x: '-50%', delay: 0.5});
gsap.from('.mouse', {ease: "expo",duration: 2, opacity: 0, y: '150%', delay: 1.7, filter: blur()});


//Myanmar section
gsap.from('.map', {
    x: "-100%",
    opacity: 0,
    scrollTrigger: {
        trigger: '.map',
        // markers: true,
        scrub: 2,
        endTrigger: ".map",
        start: "top 70%",
        end: "top 50%"
    }
});
gsap.from('.from', {
    x: "100%",
    opacity: 0,
    delay: "3",
    scrollTrigger: {
        trigger: '.map',
        // markers: true,
        scrub: 2,
        endTrigger: ".map",
        start: "top 90%",
        end: "top 35%"
    }
});
gsap.from('.values', {
    x: "100%",
    opacity: 0,
    scrollTrigger: {
        trigger: '.from',
        // markers: true,
        scrub: 2,
        endTrigger: ".map",
        start: "bottom 70%",
        end: "top 10%"
    }
});


//MYLP section
gsap.from('.liberty', {
    x: "100%",
    opacity: 0,
    scrollTrigger: {
        trigger: '.transition-top',
        markers: true,
        scrub: 2,
        start: "bottom 70%",
        end: "top 10%"
    }
});