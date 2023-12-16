var short_qt = 0
var short_rs = 0
var camisa_qt= 0
var camisa_rs = 0
var argo_qt = 0
var argo_rs = 0
var totalpag = 0
var click = 0
function carroa(){
    if (document.getElementById("carrinho1").style.display != 'block'){
        document.getElementById("carrinho1").style.display = 'block'
    }
    short_rs += 50.00
    short_qt += 1
    totalpag += 50.00
    click += 1
    document.getElementById("vlfinal").innerHTML = "<span>Total: R$"+ totalpag + ",00</span>"
    document.getElementById("cart1").style.display = 'block'
    if (click >= 1){
        document.getElementById("carrinho1").innerHTML = `<span>Short(s)</span><span>R$${short_rs},00</span><span>${short_qt}</span>`
        click = 0
    }
}
function carrob(){
    if (document.getElementById("carrinho2").style.display != 'block'){
        document.getElementById("carrinho2").style.display = 'block'
    }
    camisa_qt += 1
    camisa_rs += 70.00
    totalpag += 70.00
    click  += 1
    document.getElementById("vlfinal").innerHTML = "<span>Total: R$"+ totalpag + ",00</span>"
    document.getElementById("cart2").style.display = 'block'
    if (click >= 1){
        document.getElementById("carrinho2").innerHTML = `<span>Camisa(s)</span><span>R$${camisa_rs},00</span><span>${camisa_qt}</span>`
        click = 0
    }
}
function carroc(){
    if (document.getElementById("carrinho3").style.display != 'block'){
        document.getElementById("carrinho3").style.display = 'block'
    }
    argo_qt += 1
    argo_rs += 20.00
    totalpag += 20.00
    click += 1
    document.getElementById("vlfinal").innerHTML = "<span>Total: R$"+ totalpag + ",00</span>"
    document.getElementById("cart3").style.display = 'block'
    if (click >= 1){
        document.getElementById("carrinho3").innerHTML = `<span>Arganel(s)</span><span>R$${argo_rs},00</span><span>${argo_qt}</span>`
        click = 0
    }
}
function removecra(){
    short_qt -= 1
    totalpag -= 50.00
    document.getElementById("carrinho1").innerHTML = `<span>Short(s)</span><span>R$${short_rs -= 50.00},00</span><span>${short_qt}</span>`
    document.getElementById("vlfinal").innerHTML = "<span>Total:R$"+ totalpag + ",00</span>"
    if (short_qt < 1){
        document.getElementById("carrinho1").style.display = 'none'
        short_qt = 0
        document.getElementById("cart1").style.display ='none'
    }
    
}
function removecrb(){
    camisa_qt -= 1
    totalpag -= 70.00
    document.getElementById("carrinho2").innerHTML = `<span>Camisa(s)</span><span>R$${camisa_rs -= 70.00},00</span><span>${camisa_qt}</span>`
    document.getElementById("vlfinal").innerHTML = "<span> Total:R$"+ totalpag + ",00</span>"
    if (camisa_qt < 1){
        document.getElementById("carrinho2").style.display = 'none'
        short_qt = 0
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
