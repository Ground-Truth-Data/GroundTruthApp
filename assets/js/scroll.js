window.addEventListener('scroll', function() {
    const header = document.querySelector('header.gh-head');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});