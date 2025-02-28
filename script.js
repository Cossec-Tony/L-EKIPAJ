
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

