function info(){
    let meses = new Array( 'jan','Fev','Mar','Abr','May','Jun','Jul' ,'Ago','Set','Oct','Nov','Dez')
    let semana = new Array('Dom','Seg','ter','Qua','Quin','Sex','Sab')
    let agora = new Date
    let saida = document.getElementById('saida');
    let dia = agora.getDate();
    let mes = agora.getMonth();
    let ano = agora.geFullYear();
    let sem = agora.getDay();
    let hora = agora.getHours();
    let min = agora.getMinutes();
    let seg = agora.getSeconds();
    saida.innerHTML =`<p>Dia: <mark>${dia}</mark></p>`
    saida.innerHTML +=`<p>Dia: <mark>${meses[mes]}</mark></p>`
    saida.innerHTML +=`<p>Dia: <mark>${ano}</mark></p>`
    saida.innerHTML +=`<p>Dia: <mark>${semana[sem]}</mark></p>`
    saida.innerHTML +=`<p>Dia: <mark>${hora}</mark></p>`
    saida.innerHTML +=`<p>Dia: <mark>${min}</mark></p>`
    saida.innerHTML +=`<p>Dia: <mark>${seg}</mark></p>`
}