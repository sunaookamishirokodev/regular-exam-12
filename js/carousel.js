document.addEventListener('DOMContentLoaded', function() {
  const wrapper = document.querySelector('.carousel-wrapper');
  let currentIndex = 0;
  const items = document.querySelectorAll('.carousel-item');
  const itemWidth = items[0].offsetWidth;

  // Auto slide function with smooth transition
  function autoSlide() {
    currentIndex = (currentIndex + 1) % items.length;
    const targetScroll = currentIndex * itemWidth;
    smoothScrollTo(targetScroll, 1000);
  }

  function smoothScrollTo(target, duration) {
    const start = wrapper.scrollLeft;
    const distance = target - start;
    const startTime = performance.now();

    function animation(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth transition
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      wrapper.scrollLeft = start + (distance * easeProgress);

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  // Start auto sliding
  let slideInterval = setInterval(autoSlide, 7500);
});