var short_qt = 0
var short_rs = 0
var camisa_qt = 0
var camisa_rs = 0
var argo_qt = 0
var argo_rs = 0
var totalpag = 0
var click = 0

function carroa(){
    if (document.getElementById("carrinho1").style.display != 'block'){
        document.getElementById("carrinho1").style.display = 'block'
    }
    short_rs = 30.00
    short_qt -= 1
    totalpag = camisa_rs + argo_rs + short_rs
    click += 1
    document.getElementById("vlfinal").innerHTML = "<span>Total: R$"+ totalpag + ",00</span>"
    document.getElementById("cart1").style.display = 'block'
    if (click >= 1){
        document.getElementById("carrinho1").innerHTML = `<span>As 5 linguagens do amor</span><span>R$${short_rs},00</span><span>1</span>`
        click = 0
    }
}
function carrob(){
    if (document.getElementById("carrinho2").style.display != 'block'){
        document.getElementById("carrinho2").style.display = 'block'
    }
    camisa_qt += 1
    camisa_rs += 5.00
    totalpag += 5.00
    click  += 1
    document.getElementById("vlfinal").innerHTML = "<span>Total: R$"+ totalpag + ",00</span>"
    document.getElementById("cart2").style.display = 'block'
    if (camisa_qt < 4){
        if (click >= 1){
            document.getElementById("carrinho2").innerHTML = `<span>O Grande Conflito</span><span>R$${camisa_rs},00</span><span>${camisa_qt}</span>`
            click = 0
        }
    }
    else{
        document.getElementById("carrinho2").innerHTML = "<strong>Não há mais exemplares do livro!!</strong>"
        totalpag -= 5.00
        camisa_qt -= 1
        camisa_rs -= 5.00
        document.getElementById("vlfinal").innerHTML = "<span>Total: R$"+ totalpag + ",00</span>"
    }
    
}
function carroc(){
    if (document.getElementById("carrinho3").style.display != 'block'){
        document.getElementById("carrinho3").style.display = 'block'
    }
    argo_qt -= 1
    argo_rs = 20.00
    totalpag = camisa_rs + short_rs + argo_rs
    click += 1
    document.getElementById("vlfinal").innerHTML = "<span>Total: R$"+ totalpag + ",00</span>"
    document.getElementById("cart3").style.display = 'block'
    if (click >= 1){
        document.getElementById("carrinho3").innerHTML = `<span>One Piece vol. 10</span><span>R$${argo_rs},00</span><span>1</span>`
        click = 0
    }
}
function removecra(){
    short_qt += 1
    totalpag -= 30.00
    document.getElementById("vlfinal").innerHTML = "<span>Total:R$"+ totalpag + ",00</span>"
    if (short_qt < 1){
        document.getElementById("carrinho1").style.display = 'none'
        short_qt = 0
        document.getElementById("cart1").style.display ='none'
    }
    
}
function removecrb(){
    camisa_qt -= 1
    totalpag -= 5.00
    document.getElementById("carrinho2").innerHTML = `<span>O Grande Conflito</span><span>R$${camisa_rs -= 5.00},00</span><span>${camisa_qt}</span>`
    document.getElementById("vlfinal").innerHTML = "<span> Total:R$"+ totalpag + ",00</span>"
    if (camisa_qt < 1){
        document.getElementById("carrinho2").style.display = 'none'
        camisa_qt = 0
        document.getElementById("cart2").style.display ='none'
    }
    

}
function removecrc(){
    argo_qt -= 1
    totalpag -= 20.00
    document.getElementById("carrinho3").innerHTML = `<span>Arganel(s)</span><span>R$${argo_rs -= 20.00},00</span><span>${argo_qt}</span>`
    document.getElementById("vlfinal").innerHTML = "<span> Total:R$"+ totalpag + ",00</span>"
    if (argo_qt < 1){
        document.getElementById("carrinho3").style.display = 'none'
        argo_qt = 0
        document.getElementById("cart3").style.display ='none'
    }
    

}
function verificar1(){
    if(short_qt == 0 && camisa_qt == 0 && argo_qt == 0){
        window.alert("Adcione ao carrinho pelo menos 1 produto,para finalizar a compra")
    }
    if (document.getElementById("endereço").value == ""){
        window.alert("Digite um endereço.")
    }
}
function verificar2(){
    if(short_qt == 0 && camisa_qt == 0 && argo_qt == 0){
        window.alert("Adcione ao carrinho pelo menos 1 produto,para finalizar a compra")
    }
    if (document.getElementById("bairro").value == ""){
        window.alert("Digite um bairro.")
    }
}
function verificar3(){
    if(short_qt == 0 && camisa_qt == 0 && argo_qt == 0){
        window.alert("Adcione ao carrinho pelo menos 1 produto,para finalizar a compra")
    }
    if (document.getElementById("nome").value == ""){
        window.alert("Digite um nome.")
    }
}