// Função para buscar dados da API e criar os cards
async function fetchAndDisplayCards() {
    try {
        const response = await fetch("https://64d2a382f8d60b1743624173.mockapi.io/noticias");
        const data = await response.json();
        const cardContainer = document.getElementById('card-container');
        
        // Iterar sobre os dados e criar os cards
        data.forEach(conteudo => {
            const card = document.createElement('div');
            card.classList.add('col-md-6', 'col-md-6', 'mb-4'); // Classes do Bootstrap
            card.innerHTML = `
            <div class="col">
            <div class="card efeitocard">
              <div class="card-body backgroud ">
                <h3 class="card-title text-center">${conteudo.titulo}</h5>
                <p class="card-text mt-5 text-center lead">${conteudo.resumo}</p>
              </div>
              <ul class="list-group list-group-flush">
              <h5 class="list-group-item">${conteudo.secao}</h5>
              <li class="list-group-item">${conteudo.autor}</li>
              <li class="list-group-item">${conteudo.data}</li>
            </ul>
            </div>
          </div>
            `;
            cardContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
}

// Chamar a função para exibir os cards quando a página carregar
window.onload = fetchAndDisplayCards;














// let noticia = document.querySelector("#noticia")

// async function carregarDados(){
//     const url = "https://64d2a382f8d60b1743624173.mockapi.io/noticias"

//     const resultado = await fetch(url)
//     const dados = await resultado.json()
//     console.log (dados)
//     for (const item of dados){

//         let card = document.createElement("div")
//         const titulo = document.createElement("h1")
//         const resumo = document.createElement("p")
//         const autor = document.createElement("p")
//         const secao = document.createElement("h3")
//         const data = document.createElement("p")

//         titulo.textContent = item.titulo
//         resumo.textContent = item.resumo
//         autor.textContent = item.autor
//         secao.textContent = item.secao
//         data.textContent = item.data



//         card.appendChild(titulo)
//         card.appendChild(resumo)
//         card.appendChild(autor)
//         card.appendChild(secao)
//         card.appendChild(data)

//         noticia.appendChild(card)

//     }
// }
// carregarDados()
