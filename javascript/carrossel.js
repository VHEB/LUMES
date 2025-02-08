document.addEventListener("DOMContentLoaded", function () {
    const integrantes = [
        {
            nome: "Gabriela Gonçalves",
            cargo: "Líder",
            curso: "Arquitetura e Urbanismo",
            foto: "images/ana.jpg",
            linkedin: "#www.linkedin.com/in/gabriela-gonçalves-030683212 ",
            instagram: "https://www.instagram.com/elagabi.gabriela?igsh=YXJwdDl2bXFuaHFy"
        },
        {
            nome: "Vitor Hugo Estefano Barbosa",
            cargo: "Vice-líder",
            curso: "Analise e Desenvolvimento de Sistemas",
            foto: "../resources/img/equipe/VitorHugo.jpg",
            linkedin: "https://www.linkedin.com/in/vitor-heb/",
            instagram: "https://www.instagram.com/vitor_heb/"
        },
        {
            nome: "Anna Elisa Moutinho",
            cargo: "Comunicação",
            curso: "Psicologia",
            foto: "../resources/img/equipe/Aninha.jpg",
            linkedin: "https://www.linkedin.com/in/anna-elisa-moutinho-934555267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
            instagram: "https://www.instagram.com/ae.moutinho?igsh=MTFpaDBnMGhiNHd3Mg%3D%3D"
        },
        {
            nome: "Maria Giulia Jacção Alves",
            cargo: "Tesouraria",
            curso: "Biomedicina",
            foto: "../resources/img/equipe/MariaJ.jpeg",
            linkedin: "https://www.linkedin.com/in/mariagiuliaalves?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
            instagram: "https://www.instagram.com/maria.jaccao?igsh=MXNtdXYzNXR6Y3Z5NQ%3D%3D&utm_source=qr"
        },
        {
            nome: "Rafaela Jacção Alves",
            cargo: "Tesouraria",
            curso: "Arquitetura e Urbanismo",
            foto: "images/fernando.jpg",
            instagram: "https://www.instagram.com/rafa.jaccao?igsh=MXBjc2g3MW9vaWJyZA=="
        },
        {
            nome: "Thais Lopes",
            cargo: "Tesouraria",
            curso: "Engenharia Civil",
            foto: "../resources/img/equipe/ThaisLopes.jpeg",
            linkedin: "https://www.linkedin.com/in/thais-lopes-536510189?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
            instagram: "https://www.instagram.com/thaisp.ls?igsh=ZGpoaXluOGc5ampl&utm_source=qr"
        }
    ];

    const container = document.querySelector(".carousel-container");
    let index = 0;

    // Criar os cartões dinamicamente
    integrantes.forEach(integrante => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${integrante.foto}" alt="Foto de ${integrante.nome}">
            <h3>${integrante.nome}</h3>
            <p><strong>${integrante.cargo}</strong></p>
            <p>${integrante.curso}</p>
            <div class="social-icons">
                <a href="${integrante.linkedin}" target="_blank"><i class="icon icon-linkedin"></i></a>
                <a href="${integrante.instagram}" target="_blank"><i class="icon icon-instagram"></i></a>
            </div>
        `;

        container.appendChild(card);
    });

    const totalCards = integrantes.length;
    const cardWidth = document.querySelector(".card").offsetWidth + 20; // Pegamos a largura de um card + margem

    document.getElementById("prevBtn").addEventListener("click", () => {
        if (index > 0) {
            index--;
        } else {
            index = totalCards - 1; // Volta para o último cartão quando chega ao início
        }
        container.style.transform = `translateX(-${index * cardWidth}px)`;
    });

    document.getElementById("nextBtn").addEventListener("click", () => {
        if (index < totalCards - 1) {
            index++;
        } else {
            index = 0; // Volta para o primeiro cartão quando chega ao final
        }
        container.style.transform = `translateX(-${index * cardWidth}px)`;
    });
});
