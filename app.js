
gsap.to('.header', {
    scrollTrigger: {
        trigger: '.header',
        endTrigger: "footer",
        pin: true,
        // pinSpacing: 'padding', // or 'padding-box'
        markers: true,
        start: "top top",
        end: "bottom top"
    }
});

gsap.from('.hi', {duration: 1.5, opacity: 0, x: '-100%', delay: 0});
gsap.from('.lemme', {duration: 1.5, opacity: 0, x: '-50%', delay: 0.5});
gsap.from('.mouse', {duration: 2, opacity: 0, y: '150%', delay: 2});
