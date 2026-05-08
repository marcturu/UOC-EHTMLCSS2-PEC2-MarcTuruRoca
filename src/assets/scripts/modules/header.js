document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname.replace(/\/$/, '');

  links.forEach(link => {
    const href = link.getAttribute('href');

    if (!href || href === '#') return;

    const linkPath = new URL(link.href, window.location.origin)
      .pathname
      .replace(/\/$/, '');

    if (linkPath === currentPath) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  console.log("CURRENT:", currentPath);
});
