let noticia = document.querySelector("#noticia")

async function carregarDados(){
    const url = "https://64d2a382f8d60b1743624173.mockapi.io/noticias"

    const resultado = await fetch(url)
    const dados = await resultado.json()

    for (const item of dados){
        const titulo = document.createElement("h2")
        const resumo = document.createElement("p")
        const autor = document.createElement("h5")
        const secao = document.createElement("h3")
        const data = document.createElement("p")

        titulo.textContent = item.titulo
        resumo.textContent = item.resumo
        autor.textContent = item.autor
        secao.textContent = item.secao
        data.textContent = item.data

        noticia.appendChild(titulo)
        noticia.appendChild(resumo)
        noticia.appendChild(autor)
        noticia.appendChild(secao)
        noticia.appendChild(data)

        noticia.appendChild(info)

    }
}
