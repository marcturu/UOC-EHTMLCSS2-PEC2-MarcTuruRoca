document.addEventListener('DOMContentLoaded', () => {

  const normalizePath = (path) => {
    path = path.replace(/\/$/, '');

    if (path === '' || path === '/index') {
      return '/';
    }

    return path;
  };

  const links = document.querySelectorAll('.nav-link');

  const currentPath = normalizePath(window.location.pathname);

  links.forEach(link => {

    const href = link.getAttribute('href');

    if (!href || href === '#') return;

    const linkPath = normalizePath(
      new URL(link.href, window.location.origin).pathname
    );

    if (linkPath === currentPath) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  console.log('CURRENT:', currentPath);
});