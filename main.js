document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.querySelector('.pkp_site_nav_toggle');
  const navMenu = document.querySelector('.pkp_site_nav_menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      const isActive = navMenu.classList.toggle('active');
      navMenu.classList.toggle('is_open', isActive);
      toggleBtn.classList.toggle('active', isActive);
      toggleBtn.classList.toggle('is_active', isActive);
      toggleBtn.setAttribute('aria-expanded', isActive);

      const icon = toggleBtn.querySelector('.fa');
      if (icon) {
        if (isActive) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if ((navMenu.classList.contains('active') || navMenu.classList.contains('is_open')) && 
          !navMenu.contains(e.target) && 
          !toggleBtn.contains(e.target)) {
        navMenu.classList.remove('active');
        navMenu.classList.remove('is_open');
        toggleBtn.classList.remove('active');
        toggleBtn.classList.remove('is_active');
        toggleBtn.setAttribute('aria-expanded', 'false');
        const icon = toggleBtn.querySelector('.fa');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });
  }
});
