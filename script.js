// Fade-in con delay
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');

  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.15}s`;
  });
});

// Glow hover
document.querySelectorAll('.service-item, .whatsapp-btn').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    el.style.boxShadow = '0 0 20px rgba(0,210,211,.6)';
  });
  el.addEventListener('mouseleave', () => {
    el.style.boxShadow = '';
  });
});

// Cursor pointer
document.querySelectorAll('a, button, .service-item').forEach((el) => {
  el.addEventListener('mouseenter', () => (el.style.cursor = 'pointer'));
  el.addEventListener('mouseleave', () => (el.style.cursor = ''));
});

// --- 🚫 BLOQUEO DE FUNCIONALIDAD Y COPIADO ---
document.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('keydown', (e) => {
  if (
    e.keyCode === 123 ||
    (e.ctrlKey && e.shiftKey && [73, 74, 67, 75].includes(e.keyCode)) ||
    (e.metaKey && e.altKey && e.keyCode === 73) ||
    ((e.ctrlKey || e.metaKey) && e.keyCode === 67)
  ) {
    e.preventDefault();
  }
});

// Loading screen functionality
document.addEventListener('DOMContentLoaded', function () {
  const loadingScreen = document.getElementById('loading-screen');
  const container = document.querySelector('.container');
  const progress = document.querySelector('.progress');

  // Create floating particles
  const particleCount = 20;
  const dinoContainer = document.querySelector('.dino-container');
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('loading-particles');
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 3 + 's';
    particle.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
    particle.style.width = Math.random() * 10 + 5 + 'px';
    particle.style.height = particle.style.width;
    dinoContainer.appendChild(particle);
  }

  // Simulate loading
  let progressValue = 0;
  const loadingInterval = setInterval(() => {
    progressValue += Math.random() * 10;
    if (progressValue >= 100) {
      progressValue = 100;
      clearInterval(loadingInterval);
      setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';
        document.body.classList.add('loaded');
      }, 300);
    }
    progress.style.width = progressValue + '%';
  }, 150);

  // Hover effects
  const interactiveElements = document.querySelectorAll(
    'button, .whatsapp-btn, .service-item, .feature-box'
  );
  interactiveElements.forEach((element) => {
    element.addEventListener('mouseenter', function () {
      if (this.classList.contains('whatsapp-btn')) {
        this.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.6)';
      } else if (this.classList.contains('service-item')) {
        this.style.boxShadow = '0 4px 10px rgba(0, 210, 211, 0.2)';
      } else if (this.classList.contains('feature-box')) {
        this.style.boxShadow = '0 10px 25px rgba(0, 210, 211, 0.2)';
      }
    });

    element.addEventListener('mouseleave', function () {
      if (this.classList.contains('whatsapp-btn')) {
        this.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.4)';
      } else {
        this.style.boxShadow = '';
      }
    });
  });

  // Optimize images
  const images = document.querySelectorAll('img');
  images.forEach((img) => {
    img.loading = 'lazy';
  });
});
