function enviar () {
    var num = parseInt(document.getElementById('num').value);
    var resp = document.getElementById('resposta');

    if(document.getElementById('farenheit').checked==true)
    resp.innerHTML = farenheit(num);
if(document.getElementById('celsius').checked==true)
resp.innerHTML = celsius(num);
}

function farenheit(x) {
    return(1.8*x + 32)
}

function celsius(x) {
    return((x-32)*5/9);
}