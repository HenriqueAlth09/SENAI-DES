const btnMenu = document.querySelector("#btn-menu");
const menuLateral = document.querySelector("#menu-lateral");

const card = document.querySelector(".box");
const main = document.querySelector("main");
const inputValor = document.querySelector("#valor");
const btnFiltrar = document.querySelector("#filtrar");
const selectCategoria = document.querySelector("#categoria")

btnMenu.addEventListener("click", () => {
    if (menuLateral.style.left === "" || menuLateral.style.left === "-200px") {
        menuLateral.style.left = "0";
    } else {
        menuLateral.style.left = "-200px";
    }
});



const produtos = [];

produtos.forEach((produto) => {
    let novoCard = card.cloneNode(true);

    novoCard.querySelector("img").src = produto.imagem;
    novoCard.querySelector("p").innerHTML = produto.nome;
    novoCard.querySelector(".categoria").innerHTML = produto.categoria;
    novoCard.querySelector(".valor").innerHTML = produto.valor;

    main.appendChild(novoCard);

    if(produto.valor > valormaximo) {
        valormaximo = produto.valor;
    }
});

const busca = document.querySelector("#busca");

busca.addEventListener("keyup", () => {
    main.childNodes.forEach((box) => {
        const conteudo = box.innerHTML;
        if (conteudo) {
            const nome = box.querySelector(".nome").innerHTML;
            if (nome.toLowerCase().includes(busca.value.toLowerCase())) {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
        }

    });
});

btnFiltrar.addEventListener("click", (event) => {
    event.preventDefault();
    
    const catSel = selectCategoria.value;
    const valSel = inputValor.value

    console.log(catSel, valSel);
})
