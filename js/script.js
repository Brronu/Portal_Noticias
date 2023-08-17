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

let concordo = document.querySelector("#concordo")

concordo.addEventListener("change", ()=>{
    if(concordo.checked){
        alert("obrigado pela escolha")
    }
    else{
        alert("aceite novamente")
        let mensagem = prompt("Porque você desmarcou ?") 
        //  cria uma caixa de texto
    }


})

let senha = document.querySelector("#senha")
let btn_eye = document.querySelector(".fa-eye")

// ()=>() isto é uma arrow function, ou seja uma versão resumida da versão anonima 
btn_eye.addEventListener("click", ()=>{
    if(btn_eye.classList.contains("fa-eye")){
        // console.log("a classe existe")
        btn_eye.classList.remove("fa-eye")
        btn_eye.classList.add("fa-eye-slash")

        senha.setAttribute("type", "text")

    }
    else{
        // console.log("a classe não existe")
        btn_eye.classList.remove("fa-eye-slash")
        btn_eye.classList.add("fa-eye")

        senha.setAttribute("type", "password")
    }
})