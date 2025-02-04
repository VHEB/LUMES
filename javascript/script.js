document.addEventListener("DOMContentLoaded", function () {
    // Carregar o Header
    fetch("/pages/header.html")  // Agora apontando para a pasta correta
        .then(response => response.text())
        .then(data => {
            document.querySelector("header").innerHTML = data;
        });

    // Carregar o Footer
    fetch("/pages/footer.html")  // Agora apontando para a pasta correta
        .then(response => response.text())
        .then(data => {
            document.querySelector("footer").innerHTML = data;
        });
});
