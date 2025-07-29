// Existing code...

// Enhanced fade-in effect for sections
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        } else {
            entry.target.classList.remove('visible');
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

// New animation for the hero image
document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.querySelector('.home-image');
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'scale(0.9)';
        heroImage.style.transition = 'opacity 1s ease-out, transform 1s ease-out';

        setTimeout(() => {
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'scale(1)';
        }, 500);
    }
});

// Typing animation for the main header
function typeWriter(element, text, speed = 130) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

document.addEventListener('DOMContentLoaded', () => {
    const mainHeader = document.querySelector('#home h1');
    if (mainHeader) {
        const originalText = mainHeader.textContent;
        mainHeader.textContent = '';
        typeWriter(mainHeader, originalText);
    }
});

// Smooth scroll animation for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});