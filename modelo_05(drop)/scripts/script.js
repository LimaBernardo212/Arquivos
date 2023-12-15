var short_qt = 0
var short_rs = 0
var camisa_qt= 0
var camisa_rs = 0
var argo_qt = 0
var argo_rs = 0
var totalpag = 0
var click = 0
function carroa(){
    short_rs += 50.00
    short_qt += 1
    totalpag += 50.00
    click += 1
    if (click >= 1){
        document.getElementById("carrinho1").innerHTML = `<td>Short(s)</td><td><p>R$${short_rs}</p></td><td>${short_qt}</td>`
        click = 0
    }
}
function carrob(){
    camisa_qt += 1
    camisa_rs += 70.00
    totalpag += 70.00
    click  += 1
    if (click >= 1){
        document.getElementById("carrinho2").innerHTML = `<td>Camisa(s)</td><td><p>R$${camisa_rs},00</p></td><td>${camisa_qt}</td>`
        click = 0
    }
}
function carroc(){
    argo_qt += 1
    argo_rs += 20.00
    totalpag += 20.00
    click += 1
    if (click >= 1){
        document.getElementById("carrinho3").innerHTML = `<td>Arganel(s)</td><td><p>R$${argo_rs},00</p></td><td>${argo_qt}</td>`
        click = 0
    }
}
