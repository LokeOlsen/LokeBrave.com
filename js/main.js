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


const popup = document.getElementById('lift-popup');
const popupVideo = document.getElementById('popup-video');
const liftCells = document.querySelectorAll('[data-video]');

liftCells.forEach(cell => {
  cell.addEventListener('mouseenter', () => {
    const videoSrc = cell.getAttribute('data-video');
    popupVideo.src = videoSrc;
    popup.style.opacity = '1';
    popup.style.visibility = 'visible';
    popupVideo.play();

    // Get position of the cell
    const rect = cell.getBoundingClientRect();

    // Position the popup above the cell
    popup.style.position = 'absolute';
      
    const centerX = rect.left + rect.width / 2 + window.scrollX;
    const centerY = rect.top + rect.height / 2 + window.scrollY;

    popup.style.left = centerX + 'px';
    popup.style.top = centerY + 'px';
  });

  cell.addEventListener('mouseleave', () => {
    popupVideo.pause();
    popupVideo.currentTime = 0;
    popup.style.opacity = '0';
    popup.style.visibility = 'hidden';
    popupVideo.pause();
    popupVideo.currentTime = 0;
  });
});

    
});
