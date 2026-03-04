document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP Plugin
    gsap.registerPlugin(ScrollTrigger);

    // --- 1. HERO REVEAL ---
    const tl = gsap.timeline();
    
    // Animate Nav
    tl.from('.navbar', { y: -20, opacity: 0, duration: 0.8, ease: 'power3.out' })
    // Animate Badge
      .from('.status-badge', { y: 20, opacity: 0, duration: 0.6 }, '-=0.6')
    // Animate Text
      .from('.reveal-text', { y: 20, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' }, '-=0.4')
    // Animate Profile Image (Simply Fade opacity to 1)
      .to('.profile-img', { opacity: 1, duration: 1.2, ease: 'power3.out' }, '-=0.8')
    // Animate Tech Card
      .to('.tech-card', { y: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.5)' }, '-=0.6');

    // --- 2. BULLETPROOF SCROLL ANIMATIONS ---
    // 'toggleActions: play none none none' ensures it plays once and stays visible forever.

    // General Section Headers
    const elementsToReveal = document.querySelectorAll('.reveal-element');
    elementsToReveal.forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    // Systems Grid Cards
    const systemCards = document.querySelectorAll('.system-card');
    systemCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            y: 40,
            opacity: 0,
            duration: 0.6,
            delay: (index % 2) * 0.1, 
            ease: 'power3.out'
        });
    });

    // Lab Grid Cards
    const labCards = document.querySelectorAll('.lab-card');
    labCards.forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 95%', 
                toggleActions: 'play none none none'
            },
            y: 30,
            opacity: 0,
            duration: 0.5,
            delay: (index % 3) * 0.05, 
            ease: 'power2.out'
        });
    });

    // --- 3. SMART EMAIL BUTTON ---
    const emailBtn = document.getElementById('email-btn');
    const emailText = document.getElementById('email-text');
    const emailAddress = "albertojosephernestp.2003@gmail.com";

    if (emailBtn && emailText) {
        emailBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            
            navigator.clipboard.writeText(emailAddress).then(() => {
                const originalText = emailText.textContent;
                emailText.textContent = "Email Copied! ✅";
                
                // Visual feedback
                emailBtn.style.background = "#fafafa"; 
                emailBtn.style.color = "#09090b"; 
                
                setTimeout(() => {
                    emailText.textContent = originalText;
                    emailBtn.style.background = ""; 
                    emailBtn.style.color = "";
                }, 1500);
            });
        });
    }

    // --- 4. SMOOTH SCROLLING ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                window.scrollTo({
                    top: target.offsetTop - navHeight - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
});