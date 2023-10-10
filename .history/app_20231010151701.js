//





//pin projects
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