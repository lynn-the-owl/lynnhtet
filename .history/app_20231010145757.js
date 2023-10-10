
//Landing section
gsap.from('.hi', {ease: "power4",duration: 1.5, opacity: 0, x: '-100%', delay: 0});
gsap.from('.lemme', {ease: "power4",duration: 1.5, opacity: 0, x: '-50%', delay: 0.5});
gsap.from('.mouse', {ease: "expo",duration: 2, opacity: 0, y: '150%', delay: 1.7, filter: blur()});

gsap.to('.myprojects', {
    scrollTrigger: {
        trigger: '.',
        endTrigger: ".name",
        pin: true,
        pinSpacing: 'padding', // or 'padding-box'
        markers: false,
        start: "top " + 45 * window.innerHeight * 0.01,
        end: "top" + " " + 45 * window.innerHeight * 0.01,
    }
});