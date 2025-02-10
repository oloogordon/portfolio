document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-item");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    navItems.forEach(item => {
        item.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
});