document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', function() {
        // Toggle nav links visibility
        if (navLinks.style.height === '0px' || navLinks.style.height === '') {
            navLinks.style.height = `${navLinks.scrollHeight}px`; 
        } else {
            navLinks.style.height = '0';
        }

        // Animate burger lines
        burger.classList.toggle('toggle');
    });
});