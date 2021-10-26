window.onload = function(){ // todo el codigo se ejecutara una vez la pagina este totalmente cargada...

    let btns = document.querySelectorAll('.btn .text');
    console.log(btns);

    btns.forEach((span) => {
        console.log(span.parentNode);
    });

    let ul = document.querySelector('ul');
    console.log(ul.childNodes[2].remove());

    let header = document.querySelector('#header');
    header.classList.add('text-red');
    header.style.marginTop = '10%';
    header.innerHTML = "<h1>Hola Mundo desde Javascript usando DOM</h1>";

    header = document.querySelector("#footer");
    let h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode('Probando a ver que pasa'))
    header.appendChild(h1);




} // fin window.onload