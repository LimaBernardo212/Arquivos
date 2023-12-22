var short_qt = 0
var short_rs = 0
var camisa_qt = 0
var camisa_rs = 0
var argo_qt = 0
var argo_rs = 0

var click = 0
var deus_qt = 0
var deus_rs = 0
var alfa_qt = 0
var alfa_rs = 0
var gusto_rs = 0
var gusto_qt = 0
var blind_qt = 0
var blind_rs = 0
var mike_rs = 0
var mike_qt = 0
var banana_rs = 0
var banana_qt = 0
var  totalpag = camisa_rs + short_rs + argo_rs + deus_rs + alfa_rs + gusto_rs + blind_rs + mike_rs + banana_rs
function carroa(){
    if (document.getElementById("carrinho1").style.display != 'block'){
        document.getElementById("carrinho1").style.display = 'block'
    }
    totalpag =  short_rs + camisa_rs +argo_rs + deus_rs + alfa_rs + gusto_rs + blind_rs + mike_rs + banana_rs
    short_rs = 15.00
    short_qt -= 1
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
    totalpag = short_rs + camisa_rs +argo_rs + deus_rs + alfa_rs + gusto_rs + blind_rs + mike_rs + banana_rs
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
    totalpag = camisa_rs + short_rs + argo_rs + deus_rs + alfa_rs + gusto_rs + blind_rs + mike_rs + banana_rs
    click += 1
    document.getElementById("vlfinal").innerHTML = "<span>Total: R$"+ totalpag + ",00</span>"
    document.getElementById("cart3").style.display = 'block'
    if (click >= 1){
        document.getElementById("carrinho3").innerHTML = `<span>One Piece vol. 10</span><span>R$${argo_rs},00</span><span>1</span>`
        click = 0
    }
}
function carrod(){
    if (document.getElementById("carrinho4").style.display != 'block'){
        document.getElementById("carrinho4").style.display = 'block'
    }
    deus_qt -= 1
    deus_rs = 3
    totalpag = camisa_rs + short_rs + argo_rs + deus_rs + alfa_rs + gusto_rs + blind_rs + mike_rs + banana_rs
    click += 1
    document.getElementById("vlfinal").innerHTML = "<span>Total: R$"+ totalpag + "0</span>"
    document.getElementById("cart4").style.display = 'block'
    if (click >= 1){
        document.getElementById("carrinho4").innerHTML = `<span>Oque Deus exige e o que ele oferece</span><span>R$${deus_rs},00</span><span> 1</span>`
        click = 0
    }
    if (deus_qt > 1){
        document.getElementById("carrinho4").innerHTML = `<span>Não temos mais unidades.</span>`
    }
}
function carroe(){
    if (document.getElementById("carrinho5").style.display != 'block'){
        document.getElementById("carrinho5").style.display = 'block'
    }
    alfa_qt -= 1
    alfa_rs = 40
    totalpag = camisa_rs + short_rs + argo_rs + deus_rs + alfa_rs  + gusto_rs + blind_rs + mike_rs + banana_rs
    click += 1
    document.getElementById("vlfinal").innerHTML = "<span>Total: R$"+ totalpag + ",00</span>"
    document.getElementById("cart5").style.display = 'block'
    if (click >= 1){
        document.getElementById("carrinho5").innerHTML = `<span>Alfaletrar</span><span>R$${alfa_rs},00</span><span>1</span>`
        click = 0
    }
    if (deus_qt > 1){
        document.getElementById("carrinho4").innerHTML = `<span>Não temos mais unidades.</span>`
    }
}
function carrof(){
    if (document.getElementById("carrinho6").style.display != 'block'){
        document.getElementById("carrinho6").style.display = 'block'
    }
    gusto_qt -= 1
    gusto_rs = 25
    totalpag = camisa_rs + short_rs + argo_rs + deus_rs + alfa_rs + gusto_rs + blind_rs + mike_rs + banana_rs
    click += 1
    document.getElementById("vlfinal").innerHTML = "<span>Total: R$"+ totalpag + ",00</span>"
    document.getElementById("cart6").style.display = 'block'
    if (click >= 1){
        document.getElementById("carrinho6").innerHTML = `<span>12 semanas para mudar uma vida</span><span>R$${gusto_rs},00</span><span>1</span>`
        click = 0
    }
}
function carrog(){
    if (document.getElementById("carrinho7").style.display != 'block'){
        document.getElementById("carrinho7").style.display = 'block'
    }
    blind_qt -= 1
    blind_rs = 19
    totalpag = camisa_rs + short_rs + argo_rs + deus_rs + alfa_rs + gusto_rs + blind_rs + mike_rs + banana_rs
    click += 1
    document.getElementById("vlfinal").innerHTML = "<span>Total: R$"+ totalpag + ",00</span>"
    document.getElementById("cart7").style.display = 'block'
    if (click >= 1){
        document.getElementById("carrinho7").innerHTML = `<span>Namoro Blindado</span><span>R$${blind_rs},00</span><span>1</span>`
        click = 0
    }
}
function carroh(){
    if (document.getElementById("carrinho7").style.display != 'block'){
        document.getElementById("carrinho7").style.display = 'block'
    }
    blind_qt -= 1
    blind_rs = 19
    totalpag = camisa_rs + short_rs + argo_rs + deus_rs + alfa_rs + gusto_rs + blind_rs + mike_rs + banana_rs
    click += 1
    document.getElementById("vlfinal").innerHTML = "<span>Total: R$"+ totalpag + ",00</span>"
    document.getElementById("cart7").style.display = 'block'
    if (click >= 1){
        document.getElementById("carrinho7").innerHTML = `<span>Namoro Blindado</span><span>R$${blind_rs},00</span><span>1</span>`
        click = 0
    }
}
function carroi(){
    if (document.getElementById("carrinho8").style.display != 'block'){
        document.getElementById("carrinho8").style.display = 'block'
    }
    mike_qt -= 1
    mike_rs = 25
    totalpag = camisa_rs + short_rs + argo_rs + deus_rs + alfa_rs + gusto_rs + blind_rs + mike_rs + banana_rs
    click += 1
    document.getElementById("vlfinal").innerHTML = "<span>Total: R$"+ totalpag + ",00</span>"
    document.getElementById("cart8").style.display = 'block'
    if (click >= 1){
        document.getElementById("carrinho8").innerHTML = `<span>As aventuras de mike</span><span>R$${mike_rs},00</span><span>1</span>`
        click = 0
    }
}
function carroj(){
    if (document.getElementById("carrinho9").style.display != 'block'){
        document.getElementById("carrinho9").style.display = 'block'
    }
    banana_qt -= 1
    banana_rs = 15
    totalpag = camisa_rs + short_rs + argo_rs + deus_rs + alfa_rs + gusto_rs + blind_rs + mike_rs + banana_rs
    click += 1
    document.getElementById("vlfinal").innerHTML = "<span>Total: R$"+ totalpag + ",00</span>"
    document.getElementById("cart9").style.display = 'block'
    if (click >= 1){
        document.getElementById("carrinho9").innerHTML = `<span>Diario de um banana 3</span><span>R$${banana_rs},00</span><span>1</span>`
        click = 0
    }
}
function removecra(){
    short_qt += 1
    totalpag -= 15.00
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
function removecrd(){
    deus_qt  = 0 
    totalpag -= 2.5
    if (deus_qt == 0){
        document.getElementById("carrinho4").style.display = 'none'
        document.getElementById("cart4").style.display ='none'
    }
    document.getElementById("carrinho4").innerHTML = `<span>Oque Deus exige e oque ele oferece</span><span>R$${deus_rs -= 2.5},00</span><span>0</span>`
    document.getElementById("vlfinal").innerHTML = "<span> Total:R$"+ totalpag + "</span>"
    
    

}
function removecre(){
    alfa_qt  = 0 
    totalpag -= 40
    if (alfa_qt == 0){
        document.getElementById("carrinho5").style.display = 'none'
        document.getElementById("cart5").style.display ='none'
    }
    document.getElementById("carrinho5").innerHTML = `<span>Alfaletrar</span><span>R$${alfa_rs},00</span><span>0</span>`
    document.getElementById("vlfinal").innerHTML = "<span> Total:R$"+ totalpag + "</span>"
    
    

}
function removecrf(){
    gusto_qt  = 0 
    totalpag -= 25
    if (gusto_qt == 0){
        document.getElementById("carrinho6").style.display = 'none'
        document.getElementById("cart6").style.display ='none'
    }
    document.getElementById("carrinho6").innerHTML = `<span>12 semanas para mudar</span><span>R$${gusto_rs},00</span><span>0</span>`
    document.getElementById("vlfinal").innerHTML = "<span> Total:R$"+ totalpag + "</span>"
    
    

}
function removecrg(){
    blind_qt  = 0 
    totalpag -= 19
    if (blind_qt == 0){
        document.getElementById("carrinho7").style.display = 'none'
        document.getElementById("cart7").style.display ='none'
    }
    document.getElementById("carrinho7").innerHTML = `<span>Namoro Blindado</span><span>R$${blind_rs_rs},00</span><span>0</span>`
    document.getElementById("vlfinal").innerHTML = "<span> Total:R$"+ totalpag + "</span>"
    
    

}
function removecri(){
    mike_qt  = 0 
    totalpag -= 25
    if (mike_qt == 0){
        document.getElementById("carrinho8").style.display = 'none'
        document.getElementById("cart8").style.display ='none'
    }
    document.getElementById("carrinho8").innerHTML = `<span>As aventuras de mike</span><span>R$${mike_rs},00</span><span>0</span>`
    document.getElementById("vlfinal").innerHTML = "<span> Total:R$"+ totalpag + "</span>"
}
function removecrj(){
    banana_qt  = 0 
    totalpag -= 15
    if (banana_qt == 0){
        document.getElementById("carrinho9").style.display = 'none'
        document.getElementById("cart9").style.display ='none'
    }
    document.getElementById("carrinho9").innerHTML = `<span>Diario de um banana 3</span><span>R$${banana_rs},00</span><span>0</span>`
    document.getElementById("vlfinal").innerHTML = "<span> Total:R$"+ totalpag + "</span>"
    
    

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
