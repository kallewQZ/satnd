const searchHeroInput = document.getElementById("search-hero");
const btnSearch = document.getElementById("btn-search");

function pesquisarHero() {
    const filtro = searchHeroInput.value.trim();
    if (filtro === "") return; // nada digitado

    // Vai para a seção de modelos
    document.getElementById("modelos").scrollIntoView({ behavior: "smooth" });

    // Filtra os modelos na lista
    renderModelos(filtro);
}

// Enter no teclado
searchHeroInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        pesquisarHero();
    }
});

// Clique no botão
btnSearch.addEventListener("click", pesquisarHero);

const modelos = [
    {
        id: "bmw-x6",
        nome: "BMW X6",
        ano: "2022",
        preco: "R$ 450.000",
        imagem: "img/car1.jpg",
        imagens: [
            "img/car2.jpg",
            "img/car1.jpg",
            "img/car3.jpg",
            "img/car4.jpg"
        ],
        descricao: "SUV esportivo com motor V6 biturbo e acabamento premium."
    },

    {
        id: "bmw-x7",
        nome: "BMW X7",
        ano: "2022",
        preco: "R$ 450.000",
        imagem: "img/car2.jpg",
        imagens: [
            "img/moto1.jpg",
            "img/moto2.jpg",
            "img/moto3.jpg",
            "img/moto4.jpg"
        ],
        descricao: "SUV esportivo com motor V6 biturbo e acabamento premium."
    },
    {
        id: "bmw-x4",
        nome: "BMW X4",
        ano: "2022",
        preco: "R$ 450.000",
        imagem: "img/car3.jpg",
        imagens: [
            "img/car8.jpg",
            "img/car7.jpg",
            "img/car5.jpg",
            "img/car6.jpg"
        ],
        descricao: "SUV esportivo com motor V6 biturbo e acabamento premium."
    },
    {
        id: "audi-a4",
        nome: "Audi A4",
        ano: "2021",
        preco: "R$ 280.000",
        imagem: "img/car4.jpg",
        imagens: [
            "img/moto1.jpg",
            "img/moto2.jpg",
            "img/moto4.jpg",
            "img/moto3.jpg"
        ],
        descricao: "Sedan executivo com tecnologia avançada."
    },
    {
        id: "audi-a55",
        nome: "Audi 55",
        ano: "2021",
        preco: "R$ 280.000",
        imagem: "img/car5.jpg",
        imagens: [
            "img/moto2.jpg",
            "img/moto1.jpg",
            "img/moto3.jpg",
            "img/moto4.jpg"
        ],
        descricao: "Sedan executivo com tecnologia avançada."
    },
    {
        id: "audi-a55",
        nome: "Audi 55",
        ano: "2021",
        preco: "R$ 280.000",
        imagem: "img/car6.jpg",
        imagens: [
            "img/car2.jpg",
            "img/car1.jpg",
            "img/car1-3.jpg",
            "img/car1-4.jpg"
        ],
        descricao: "Sedan executivo com tecnologia avançada."
    },
    {
        id: "audi-a55",
        nome: "Audi 55",
        ano: "2021",
        preco: "R$ 280.000",
        imagem: "img/car7.jpg",
        imagens: [
            "img/car2.jpg",
            "img/car1.jpg",
            "img/car1-3.jpg",
            "img/car1-4.jpg"
        ],
        descricao: "Sedan executivo com tecnologia avançada."
    },

    {
        id: "mustang",
        nome: "Ford Mustang",
        ano: "2023",
        preco: "R$ 520.000",
        imagem: "img/car8.jpg",
        imagens: [
            "img/car2.jpg",
            "img/car1.jpg",
            "img/car1-3.jpg",
            "img/car1-4.jpg"
        ],
        descricao: "Muscle car icônico com motor V8 e performance extrema."
    },
    {
        id: "mustang",
        nome: "Ford Mustang",
        ano: "2023",
        preco: "R$ 520.000",
        imagem: "img/moto1.jpg",
        imagens: [
            "img/car2.jpg",
            "img/car1.jpg",
            "img/car1-3.jpg",
            "img/car1-4.jpg"
        ],
        descricao: "Muscle car icônico com motor V8 e performance extrema."
    },
    {
        id: "mustang",
        nome: "Ford Mustang",
        ano: "2023",
        preco: "R$ 520.000",
        imagem: "img/moto2.jpg",
        imagens: [
            "img/car2.jpg",
            "img/car1.jpg",
            "img/car1-3.jpg",
            "img/car1-4.jpg"
        ],
        descricao: "Muscle car icônico com motor V8 e performance extrema."
    },
    {
        id: "mustang",
        nome: "Ford Mustang",
        ano: "2023",
        preco: "R$ 520.000",
        imagem: "img/moto3.jpg",
        imagens: [
            "img/car2.jpg",
            "img/car1.jpg",
            "img/car1-3.jpg",
            "img/car1-4.jpg"
        ],
        descricao: "Muscle car icônico com motor V8 e performance extrema."
    },
    {
        id: "mustang",
        nome: "Ford Mustang",
        ano: "2023",
        preco: "R$ 520.000",
        imagem: "img/moto4.jpg",
        imagens: [
            "img/car2.jpg",
            "img/car1.jpg",
            "img/car1-3.jpg",
            "img/car1-4.jpg"
        ],
        descricao: "Muscle car icônico com motor V8 e performance extrema."
    }
];

const lista = document.getElementById("lista-modelos");
const detalhesContainer = document.getElementById("detalhes-modelos");
const search = document.getElementById("search");

function renderModelos(filtro = "") {
    lista.innerHTML = "";
    modelos
        .filter(m => m.nome.toLowerCase().includes(filtro.toLowerCase()))
        .forEach(m => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <img src="${m.imagem}" alt="${m.nome}">
                <h3>${m.nome}</h3>
                <p>${m.preco}</p>
                <p>${m.ano}</p>
            `;
            card.onclick = () => {
                document.getElementById(m.id).scrollIntoView({ behavior: "smooth" });
            };
            lista.appendChild(card);
        });
}

function renderDetalhes() {
    modelos.forEach(modelo => {
        const section = document.createElement("section");
        section.id = modelo.id;
        section.classList.add("modelo-section");

        let imagensHTML = modelo.imagens.map(img => `<img src="${img}" alt="${modelo.nome}">`).join("");

        section.innerHTML = `
    <h2>${modelo.nome}</h2>
    <div class="galeria-modelo">
        ${imagensHTML}
    </div>
    <p><strong>Ano:</strong> ${modelo.ano}</p>
    <p><strong>Preço:</strong> ${modelo.preco}</p>
    <p>${modelo.descricao}</p>
    <a href="#contato" class="btn">Tenho Interesse</a>
`;


        detalhesContainer.appendChild(section);
    });
}

search.addEventListener("input", (e) => {
    renderModelos(e.target.value);
});

document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("nav").classList.toggle("active");
});

renderModelos();
renderDetalhes();

document.getElementById("contato-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Obrigado! Sua mensagem foi enviada com sucesso.");
    this.reset();
});



