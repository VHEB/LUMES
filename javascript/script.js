document.addEventListener("DOMContentLoaded", function () {
    // Carregar o Header
    fetch("/pages/header.html")  // Caminho correto baseado na estrutura
        .then(response => response.text())
        .then(data => {
            let header = document.querySelector("header");
            if (header) {
                header.innerHTML = data;
            } else {
                console.error("Elemento <header> não encontrado!");
            }
        });

    // Carregar o Footer
    fetch("/pages/footer.html")  // Caminho correto baseado na estrutura
        .then(response => response.text())
        .then(data => {
            let footer = document.querySelector("footer");
            if (footer) {
                footer.innerHTML = data;
            } else {
                console.error("Elemento <footer> não encontrado!");
            }
        });
});
