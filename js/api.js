let noticia = document.querySelector("#noticia")

async function carregarDados(){
    const url = "https://64d2a382f8d60b1743624173.mockapi.io/noticias"

    const resultado = await fetch(url)
    const dados = await resultado.json()
    console.log (dados)
    for (const item of dados){

        let card = document.createElement("div")
        const titulo = document.createElement("h1")
        const resumo = document.createElement("p")
        const autor = document.createElement("p")
        const secao = document.createElement("h3")
        const data = document.createElement("p")

        titulo.textContent = item.titulo
        resumo.textContent = item.resumo
        autor.textContent = item.autor
        secao.textContent = item.secao
        data.textContent = item.data



        card.appendChild(titulo)
        card.appendChild(resumo)
        card.appendChild(autor)
        card.appendChild(secao)
        card.appendChild(data)

        noticia.appendChild(card)

    }
}
carregarDados()
