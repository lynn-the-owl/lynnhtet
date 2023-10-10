
//Landing section
gsap.from('.hi', {ease: "power4",duration: 1.5, opacity: 0, x: '-100%', delay: 0});
gsap.from('.lemme', {ease: "power4",duration: 1.5, opacity: 0, x: '-50%', delay: 0.5});
gsap.from('.mouse', {ease: "expo",duration: 2, opacity: 0, y: '150%', delay: 1.7, filter: blur()});

gsap.to('.myprojects', {
    scrollTrigger: {
        trigger: '.myprojects',
        endTrigger: ".foot",
        pin: true,
        pinSpacing: 'padding', // or 'padding-box'
        markers: true,
        start: "top top"
        end: "top" + " " + 45 * window.innerHeight * 0.01,
    }
});