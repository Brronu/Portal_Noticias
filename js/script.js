// escreve email em confirmar email 
let email = document.querySelector("#email")
let confirmacao = document.querySelector("#confirmar")

let minusculo = email.value.toLowerCase()

email.addEventListener("keyup",function(){
    let minusculo = email.value.toLowerCase()

    confirmacao.value = email.value

    // indexOf verifica se tem no campo, "||" significa ou; 

    if(minusculo.indexOf("@") == -1 || minusculo.indexOf(".com") == -1){
        console.log ("Email invalido")
        // email.style.border = "2px solid red"
        email.classList.add("border-danger")
        email.classList.remove("border-success")
    }
    else{
        console.log("Email válido")
        // email.style.border = "2px solid green"
        email.classList.add("border-success")
        email.classList.remove("border-danger")
    }


    // verifica se no index do texto em @
     console.log(email.value.indexOf("@"))


})

let escolha = document.querySelector("#escolha")
let contrato = document.querySelector("#contrato")

contrato.classList.add("d-none")

escolha.addEventListener("change", ()=>{
    if(escolha.checked){
        contrato.classList.remove("d-none")
        contrato.classList.add("d-block")
        // alert("Obrigado por concordar! ")
    }    
    else{
        contrato.classList.remove("d-block")
        contrato.classList.add("d-none")
        // alert("Aceite o contrato novamente !")
    }


})


let mensagem = document.querySelector("#mensagem")
let restante = document.querySelector("#restante")



let limite = 100
mensagem.addEventListener("keyup", ()=>{
    // console.log(mensagem.value.length)
    restante.textContent = mensagem.value.length

    mensagem.setAttribute("maxlength", limite)
    console.log(restante.parentNode)

    if(restante.textContent == 100){
        mensagem.classList.add("border-danger")
        restante.parentNode.style.color = "red"
    }
    else{
        mensagem.classList.remove("border-danger")
        restante.parentNode
    }

})