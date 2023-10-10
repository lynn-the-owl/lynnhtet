
//Landing section
gsap.from('.hi', {ease: "power4",duration: 1.5, opacity: 0, x: '-100%', delay: 0});
gsap.from('.lemme', {ease: "power4",duration: 1.5, opacity: 0, x: '-50%', delay: 0.5});
gsap.from('.mouse', {ease: "expo",duration: 2, opacity: 0, y: '150%', delay: 1.7, filter: blur()});


gsap.to('.name', {ease: "", y: "-400%" ,duration: 2, opacity: 1, delay: 1.5, filter: blur("6px")});
// gsap.to('.name', {ease: "", y: "-400%" ,duration: 3, opacity: 1, delay: 99999991, filter: blur("6px")});



gsap.to('.myprojects', {
    scrollTrigger: {
        trigger: '.myprojects',
        endTrigger: ".foot",
        pin: true,
        pinSpacing: 'padding', // or 'padding-box'
        // markers: true,
        start: "top",
        end: "bottom bottom"
    }
});