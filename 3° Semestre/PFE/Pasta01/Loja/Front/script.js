const API = "http://localhost:3000/produtos";

const container = document.getElementById("produtos");
const search = document.getElementById("search");

let produtos = [];

async function carregar() {
  const res = await fetch(API);
  produtos = await res.json();
  render(produtos);
}

function render(lista) {
  container.innerHTML = "";

  lista.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.imagem || 'https://via.placeholder.com/300'}">
        <div class="card-content">
          <h3>${p.nome}</h3>
          <p>${p.categoria} • ${p.marca}</p>
          <div class="preco">R$ ${p.preco}</div>
        </div>
      </div>
    `;
  });
}

search.addEventListener("input", () => {
  const val = search.value.toLowerCase();

  const filtrado = produtos.filter(p =>
    p.nome.toLowerCase().includes(val)
  );

  render(filtrado);
});

carregar();