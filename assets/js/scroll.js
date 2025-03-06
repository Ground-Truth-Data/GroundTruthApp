let lastScrollY = window.scrollY;
let isScrolled = false;

window.addEventListener('scroll', function() {
    // Determine scroll direction and amount
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY;
    
    // Only change state if there's significant scroll
    if (scrollDelta > 10 && !isScrolled) {  // Scrolling down
        document.querySelector('header.gh-head').classList.add('scrolled');
        isScrolled = true;
    } else if (scrollDelta < -10 && isScrolled) {  // Scrolling up
        document.querySelector('header.gh-head').classList.remove('scrolled');
        isScrolled = false;
    }
    
    lastScrollY = currentScrollY;
});


