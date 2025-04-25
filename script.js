document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.mobile-close-btn');
  const overlay = document.createElement('div');
  overlay.className = 'menu-overlay';
  document.body.appendChild(overlay);

  // Toggle menu
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = 'hidden';
  });

  // Close menu
  function closeMenu() {
    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // Close when clicking menu links
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-question').forEach((item) => {
    item.addEventListener('click', () => {
      const parent = item.parentElement;
      const currentlyActive = document.querySelector('.faq-item.active');

      if (currentlyActive && currentlyActive !== parent) {
        currentlyActive.classList.remove('active');
        currentlyActive.querySelector('.faq-toggle').textContent = '▼';
      }

      parent.classList.toggle('active');
      const toggle = parent.querySelector('.faq-toggle');
      toggle.textContent = parent.classList.contains('active') ? '▲' : '▼';
    });
  });
});
