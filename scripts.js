// Particles.js Configuration
particlesJS('particles-js', {
  particles: {
    number: { value: 100, density: { enable: true, value_area: 1000 } },
    color: { value: '#1efbff' },
    shape: { type: 'circle' },
    opacity: { value: 0.5, random: true },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 150, color: '#1efbff', opacity: 0.4, width: 2 },
    move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
    modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
  },
  retina_detect: true
});

// Typed.js Configuration
new Typed('#typed-text', {
  strings: [
  'Embedded Systems Engineer',
  'Firmware Developer (Fresher)',
  
],

  typeSpeed: 80,
  backSpeed: 80,
  loop: true
});

// Scroll Progress Indicator
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / height) * 100;
  document.querySelector('.scroll-progress').style.transform = `scaleX(${scrolled / 100})`;
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Tab Functionality
document.addEventListener('DOMContentLoaded', function () {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  let activeTab = null;

  tabContents.forEach(content => content.classList.remove('active'));
  tabButtons.forEach(btn => btn.classList.remove('active'));

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const tabId = button.getAttribute('data-tab');
      const targetTab = document.getElementById(tabId);

      if (activeTab === tabId) {
        button.classList.remove('active');
        targetTab.classList.remove('active');
        activeTab = null;
      } else {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        button.classList.add('active');
        targetTab.classList.add('active');
        activeTab = tabId;
      }
    });
  });

 

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        skills.forEach(skill => {
          new ProgressBar.Circle(`#${skill.id}`, {
            strokeWidth: 6,
            easing: 'easeInOut',
            duration: 1400,
            color: '#1efbff',
            trailColor: '#2a2a2a',
            trailWidth: 6,
            svgStyle: null,
            text: {
              value: `${skill.percent}%`,
              className: 'progressbar-text',
              style: {
                color: '#fff',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '16px',
                fontWeight: 'bold'
              }
            }
          }).animate(skill.percent / 100);
        });
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(document.querySelector('.skills-block-grid'));
});
// Navigation Menu Toggle mobile
  function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("active");
  }


