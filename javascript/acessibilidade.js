window.addEventListener('load', () => {
    const aumentarFonte = document.getElementById('aumentar-fonte');
    const diminuirFonte = document.getElementById('diminuir-fonte');
    const normalizarFonte = document.getElementById('normalizar-fonte');
    const contraste = document.getElementById('contraste');
    const vlibrasButton = document.getElementById('vlibras-button');
    let fontSize = 1; // Fator multiplicador

    function atualizarFonte() {
        document.documentElement.style.setProperty('--font-size-h1', `${2.5 * fontSize}rem`);
        document.documentElement.style.setProperty('--font-size-h2', `${2 * fontSize}rem`);
        document.documentElement.style.setProperty('--font-size-h3', `${1.5 * fontSize}rem`);
        document.documentElement.style.setProperty('--font-size-h4', `${1.2 * fontSize}rem`);
        document.documentElement.style.setProperty('--font-size-h5', `${1 * fontSize}rem`);
        document.documentElement.style.setProperty('--font-size-h6', `${0.8 * fontSize}rem`);
        document.documentElement.style.setProperty('--font-size-p', `${1 * fontSize}rem`);
        document.documentElement.style.setProperty('--font-size-small', `${0.8 * fontSize}rem`);
    }

    if (aumentarFonte) {
        aumentarFonte.addEventListener('click', () => {
            if (fontSize <= 1.4) {
                fontSize += 0.1;
                atualizarFonte();
            }
        });
    }

    if (diminuirFonte) {
        diminuirFonte.addEventListener('click', () => {
            if (fontSize > 0.8) {
                fontSize -= 0.1;
                atualizarFonte();
            }
        });
    }

    if (normalizarFonte) {
        normalizarFonte.addEventListener('click', () => {
            fontSize = 1;
            atualizarFonte();
        });
    }

    if (contraste) {
        contraste.addEventListener('click', function() {
            document.body.classList.toggle('alto-contraste');
        });               
    }

    if (vlibrasButton) {
        vlibrasButton.addEventListener('click', function () {
            const vlibrasWidget = document.querySelector('[vw-access-button]');
            if (vlibrasWidget) {
                vlibrasWidget.click();
            }
        });
    }
});
