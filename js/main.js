window.addEventListener('scroll', () => {
    const parallaxSections = document.querySelectorAll('.parallax');

    parallaxSections.forEach(section => {
        const speed = 0.5; // adjust speed as needed
        const offset = window.scrollY;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Only apply the effect when the section is in the viewport
        if (offset + window.innerHeight > sectionTop && offset < sectionTop + sectionHeight) {
            const scrollAmount = offset - sectionTop;
            const video = section.querySelector('.parallax-bg');

            if (video) {
                video.style.transform = `translateY(${scrollAmount * speed}px)`;
            }
        }
    });

    const prVideos = document.querySelectorAll('.pr-video');

prVideos.forEach(video => {
  video.addEventListener('mouseenter', () => {
    video.play();
  });
  video.addEventListener('mouseleave', () => {
    video.pause();
    video.currentTime = 0; // Reset to start frame
  });
});

    
});
