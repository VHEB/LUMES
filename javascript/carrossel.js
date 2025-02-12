document.addEventListener("DOMContentLoaded", function () {
    const integrantes = [
        {
            nome: "Gabriela Gonçalves",
            cargo: "Líder",
            curso: "Arquitetura e Urbanismo",
            foto: "../resources/img/equipe/Gabi.jpg",
            linkedin: "https://www.linkedin.com/in/gabriela-gonçalves-030683212",
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
            linkedin: "https://www.linkedin.com/in/anna-elisa-moutinho-934555267",
            instagram: "https://www.instagram.com/ae.moutinho"
        },
        {
            nome: "Maria Giulia Jacção Alves",
            cargo: "Tesouraria",
            curso: "Biomedicina",
            foto: "../resources/img/equipe/MariaJ.jpeg",
            linkedin: "https://www.linkedin.com/in/mariagiuliaalves",
            instagram: "https://www.instagram.com/maria.jaccao"
        },
        {
            nome: "Rafaela Jacção Alves",
            cargo: "Criação e Mídias",
            curso: "Arquitetura e Urbanismo",
            foto: "../resources/img/equipe/UserF.png",
            instagram: "https://www.instagram.com/rafa.jaccao"
        },
        {
            nome: "Thais Lopes",
            cargo: "Criação e Fotografia",
            curso: "Engenharia Civil",
            foto: "../resources/img/equipe/ThaisLopes.jpeg",
            linkedin: "https://www.linkedin.com/in/thais-lopes-536510189",
            instagram: "https://www.instagram.com/thaisp.ls"
        }
    ];

    const container = document.querySelector(".carousel-container");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (!container || !prevBtn || !nextBtn) {
        console.error("Erro: Elementos do carrossel não encontrados.");
        return;
    }

    // Criar os cartões dinamicamente dentro do container
    integrantes.forEach(integrante => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${integrante.foto}" alt="Foto de ${integrante.nome}">
            <h3>${integrante.nome}</h3>
            <p><strong>${integrante.cargo}</strong></p>
            <p>${integrante.curso}</p>
            <div class="social-icons">
                ${integrante.linkedin ? `<a href="${integrante.linkedin}" target="_blank"><i class="icon icon-linkedin"></i></a>` : ''}
                ${integrante.instagram ? `<a href="${integrante.instagram}" target="_blank"><i class="icon icon-instagram"></i></a>` : ''}
            </div>
        `;

        container.appendChild(card);
    });

    const cards = document.querySelectorAll(".card");
    if (cards.length === 0) {
        console.error("Erro: Nenhum cartão foi criado.");
        return;
    }

    let index = 0;
    const cardWidth = cards[0].offsetWidth + 20; // Largura do cartão + margem
    const visibleCards = Math.floor(container.parentElement.offsetWidth / cardWidth); // Quantos cabem na tela
    const maxIndex = cards.length - visibleCards; // Último índice válido

    function updateCarousel() {
        container.style.transition = "transform 0.5s ease-in-out";
        container.style.transform = `translateX(-${index * cardWidth}px)`;
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index >= maxIndex;
    }

    prevBtn.addEventListener("click", () => {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (index < maxIndex) {
            index++;
            updateCarousel();
        }
    });

    // Ajusta a largura total do container para garantir que todos os cartões estejam visíveis
    container.style.width = `${cards.length * cardWidth}px`;

    updateCarousel();
});
