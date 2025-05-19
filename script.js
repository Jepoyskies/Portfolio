document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero animations
    gsap.from('.profile-img', {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: 'power4.out'
    });

    gsap.from('.hero-content h1', {
        duration: 1,
        opacity: 0,
        y: 50,
        delay: 0.3,
        ease: 'power4.out'
    });

    gsap.from('.hero-content p', {
        duration: 1,
        opacity: 0,
        y: 40,
        delay: 0.6,
        ease: 'power4.out'
    });

    const viewMyWorkBtn = document.querySelector('.btn-primary');
    if (viewMyWorkBtn) {
        console.log('View My Work button found:', viewMyWorkBtn); // Debug log
        gsap.from(viewMyWorkBtn, {
            duration: 1,
            opacity: 0,
            y: 30,
            delay: 0.9,
            ease: 'power4.out',
            onComplete: () => {
                viewMyWorkBtn.style.opacity = 1; // Ensure visibility after animation
            }
        });
    } else {
        console.error('View My Work button not found in the DOM.');
    }

    // Section animations
    gsap.utils.toArray('.section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
            },
            opacity: 0,
            y: 50,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Project card animations
    gsap.utils.toArray('.project-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
            },
            opacity: 0,
            y: 40,
            duration: 0.8,
            delay: i * 0.1,
            ease: 'power3.out'
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Back to top button
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        console.log('Back to Top button found:', backToTop); // Debug log
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.style.display = 'block';
            } else {
                backToTop.style.display = 'none';
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    } else {
        console.error('Back to Top button not found in the DOM.');
    }

    // Email button functionality
    const emailBtn = document.querySelector('.email-btn');
    if (emailBtn) {
        emailBtn.addEventListener('click', (e) => {
            e.preventDefault();
            emailBtn.classList.toggle('show-email');
            if (emailBtn.classList.contains('show-email')) {
                const email = emailBtn.getAttribute('data-email');
                emailBtn.querySelector('.email-text').textContent = email;
            }
        });
    }
});