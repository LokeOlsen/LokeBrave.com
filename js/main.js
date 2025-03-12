// Parallax scrolling for video backgrounds
window.addEventListener('scroll', () => {
    const parallaxSections = document.querySelectorAll('.parallax');

    parallaxSections.forEach(section => {
        const speed = 0.5; // Adjust speed for parallax intensity
        const offset = window.scrollY;
        const video = section.querySelector('.parallax-bg');

        if (video) {
            video.style.transform = `translateY(${offset * speed}px)`;
        }
    });
});
