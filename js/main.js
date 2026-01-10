// Propulse Website - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Header scroll effect
  initHeaderScroll();

  // Mobile menu
  initMobileMenu();

  // Fade-in animations on scroll
  initScrollAnimations();

  // Smooth scroll for anchor links
  initSmoothScroll();
});

// Header scroll effect
function initHeaderScroll() {
  const header = document.getElementById('header');

  if (!header) return;

  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Mobile menu toggle
function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', function() {
    menu.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu when clicking on a link
  menu.querySelectorAll('a').forEach(function(link) {
    link.addEventListener('click', function() {
      menu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// Scroll animations
function initScrollAnimations() {
  const fadeElements = document.querySelectorAll('.fade-in');

  if (!fadeElements.length) return;

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeElements.forEach(function(el) {
    observer.observe(el);
  });
}

// Smooth scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      if (href === '#') return;

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        const headerHeight = document.getElementById('header').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// FAQ Toggle
function toggleFaq(button) {
  const isActive = button.classList.contains('active');

  // Close all FAQs
  document.querySelectorAll('.faq-question').forEach(function(q) {
    q.classList.remove('active');
    q.nextElementSibling.classList.remove('active');
  });

  // Toggle current FAQ
  if (!isActive) {
    button.classList.add('active');
    button.nextElementSibling.classList.add('active');
  }
}
