window.addEventListener('scroll', () => {
    const parallaxSections = document.querySelectorAll('.parallax');
    const popup = document.getElementById('lift-popup');
    const popupVideo = document.getElementById('popup-video');
    const liftCells = document.querySelectorAll('[data-video]');

    
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


    liftCells.forEach(cell => {
  cell.addEventListener('mouseenter', (e) => {
    const videoSrc = cell.getAttribute('data-video');
    popupVideo.src = videoSrc;
    popup.style.display = 'block';
    popupVideo.play();
  });

  cell.addEventListener('mousemove', (e) => {
    popup.style.left = (e.pageX + 20) + 'px';
    popup.style.top = (e.pageY - 100) + 'px';
  });

  cell.addEventListener('mouseleave', () => {
    popupVideo.pause();
    popupVideo.currentTime = 0;
    popup.style.display = 'none';
  });
});
    
    
});
