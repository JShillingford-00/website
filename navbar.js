const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    
    // Optional: Animate hamburger to X
    const spans = hamMenu.querySelectorAll('span');
    if (hamMenu.classList.contains('active')) {
        spans[0].style.transform = "rotate(45deg) translate(8px, 8px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(8px, -8px)";
    } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
    }
});