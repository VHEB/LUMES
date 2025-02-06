document.addEventListener("DOMContentLoaded", function () {
    const menuMobile = document.querySelector(".menu-mobile");
    const menu = document.querySelector(".menu");

    menuMobile.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
