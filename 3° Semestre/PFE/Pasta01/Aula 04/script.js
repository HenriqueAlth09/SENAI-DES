const key = "2789b73d95df33ba966784e22dc10313"

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`)
        .then(resposta => resposta.json())

    if(dados.cod === "404") {
        alert("Cidade não encontrada!")
        return
    }

    adicionarCardNaTela(dados)
}

function adicionarCardNaTela(dados) {
    const container = document.getElementById("container-historico")

    const novoCard = document.createElement("div")
    novoCard.classList.add("caixa-media")

    novoCard.innerHTML = `
        <h2 class="cidade">Tempo em ${dados.name}</h2>
        <p class="temp">${Math.floor(dados.main.temp)}°C</p>

        <div class="caixa-menor">
            <img class="img-previsao" alt="icone" src="https://openweathermap.org/img/wn/${dados.weather[0].icon}.png">
            <p class="texto-previsao">${dados.weather[0].description}</p>
        </div>
        <p class="umidade">Umidade ${dados.main.humidity}%</p>
    `

    container.appendChild(novoCard)
    document.querySelector(".input-cidade").value = "" // Limpa o campo após buscar
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value
    if(cidade) buscarCidade(cidade)
}

function resetarTudo() {
    document.getElementById("container-historico").innerHTML = ""
}