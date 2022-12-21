function calcular() {
    let nome_txt = document.getElementById("nome").value;
    let peso_txt = document.getElementById("peso").value;
    let altura_txt = document.getElementById("altura").value;
    let msg = document.getElementById("msg");
    let peso = parseFloat(peso_txt);
    let altura = parseFloat(altura_txt);
    let alt_2 = altura/100;
    imc = peso / (alt_2)**2;
    
    if(nome_txt.length == 0 || peso_txt.length == 0 || altura_txt.length == 0){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else if (imc < 18.5){
        msg.innerHTML = `${nome_txt} seu IMC é <strong>${(imc).toFixed(2)} você está abaixo do peso.</strong>`;
    } else if (imc >= 18.5 && 25 > imc){
        msg.innerHTML = `${nome_txt} seu IMC é <strong>${(imc).toFixed(2)} você está no peso ideal.</strong>`;
    } else if (imc >= 25 && 30 > imc){
        msg.innerHTML = `${nome_txt} seu IMC é <strong>${(imc).toFixed(2)} você está levemente acima do peso.</strong>`;
    } else if (imc >= 30 && 35 > imc){
        msg.innerHTML = `${nome_txt} seu IMC é <strong>${(imc).toFixed(2)} você tem obesidade de grau 1.</strong>`;
    } else if (imc >= 35 && 40 > imc){
        msg.innerHTML = `${nome_txt} seu IMC é <strong>${(imc).toFixed(2)} você tem obesidade de grau 2 (severa).</strong>`;
    } else if (imc >= 40){
        msg.innerHTML = `${nome_txt} seu IMC é <strong>${(imc).toFixed(2)} você tem obesidade de grau 3 (mórbida).</strong>`;
    }
    
}