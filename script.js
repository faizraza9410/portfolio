// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
  if (savedTheme === 'light-theme') {
    themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
  }
}

// Toggle Theme Function
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  const isLightTheme = body.classList.contains('light-theme');
  themeToggle.querySelector('i').classList.toggle('fa-sun', isLightTheme);
  themeToggle.querySelector('i').classList.toggle('fa-moon', !isLightTheme);

  // Save theme preference to localStorage
  localStorage.setItem('theme', isLightTheme ? 'light-theme' : '');
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

// Mobile Navigation Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
