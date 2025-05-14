document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.getElementById('nav-links');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterMessage = document.getElementById('newsletter-message');
    const navItems = document.querySelectorAll('.nav-links li a');

    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

     if (navItems) {
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            });
        });
    }


    if (newsletterForm && newsletterMessage) {
        newsletterForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const emailInput = document.getElementById('email-input');
            const email = emailInput.value;

            if (!isValidEmail(email)) {
                newsletterMessage.textContent = 'Please enter a valid email address.';
                newsletterMessage.className = 'newsletter-message error';
                return;
            }

            // Simulate a successful subscription
            newsletterMessage.textContent = `Thank you for subscribing!  A confirmation email has been sent to ${email}.`;
            newsletterMessage.className = 'newsletter-message success';
            newsletterForm.reset();
        });
    }

    function isValidEmail(email) {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }
});
