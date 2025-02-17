document.addEventListener("DOMContentLoaded", function () {
    const controls = document.querySelectorAll(".control");
    const galleryWrapper = document.querySelector(".gallery-wrapper");
    const items = document.querySelectorAll(".gallery .item");

    if (!galleryWrapper || items.length === 0) {
        console.error("Elementos do carrossel não encontrados.");
        return;
    }

    // Calcula a largura de um item (incluindo gap de 15px)
    const itemWidth = items[0].offsetWidth + 15;

    controls.forEach((control) => {
        control.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();

            if (control.classList.contains("arrow-left")) {
                galleryWrapper.scrollBy({ left: -itemWidth, behavior: "smooth" });
            } else {
                galleryWrapper.scrollBy({ left: itemWidth, behavior: "smooth" });
            }
        });
    });
});
