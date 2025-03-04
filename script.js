
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");

    menuToggle.addEventListener("click", function () {
        menuToggle.classList.toggle("active");
        menu.classList.toggle("active");
    });

    // Fermer le menu si on clique sur un lien
    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", function () {
            menuToggle.classList.remove("active");
            menu.classList.remove("active");
        });
    });
});

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {

    // effet hover
    const pricingCards = document.querySelectorAll('.pricing-card');
    pricingCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            pricingCards.forEach(c => c.style.opacity = '0.7');
            this.style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', function() {
            pricingCards.forEach(c => c.style.opacity = '1');
        });
    });

    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // You can add your contact form logic here
            if (this.classList.contains('contact-button')) {
                alert('Contactez-nous à ekipajlannion@gmail.com ou au 07 80 63 18 22');
            } else {
                const level = this.classList.contains('bronze-button') ? 'Bronze' : 
                              this.classList.contains('silver-button') ? 'Argent' : 'Or';
                alert(`Merci de votre intérêt pour la formule ${level}. Nous vous contacterons prochainement.`);
            }
        });
    });
});