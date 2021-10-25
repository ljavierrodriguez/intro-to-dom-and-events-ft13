window.onload = function(){

    /**
     * Metodos que permiten obtener elementos del DOM
     * 
     * getElementById('id') // permite buscar un elemento por su id
     * getElementsByClassName('class') // devuelve una coleccion de elementos por el nombre de la clase
     * getElementsByName('name') // devuelve una coleccion de elementos por el nombre del elemento (name)
     * getElementsByTagName('tag') // devuelve una coleccion de elementos por el nombre del elemento (tag o etiqueta)
     * 
     * Metodos que permiten crear elementos en el DOM
     * 
     * createElement('elemento'); // permite crear un elemento nuevo con el DOM
     * createTextNode('texto a crear'); // Permite crear un nuevo texto como elemento html
     * 
     * appendChild(elemento); // permite añadir el elemento en el documento o elemento
     * 
     * Metodos Especiales
     * 
     * querySelector('selector');
     * querySelectorAll('selector');
     * 
     */

    console.log(document.body);

    const header = document.getElementById('header');
    header.innerHTML = "<h1>Hola desde Javascript y DOM</h1>";
    //console.log(header);

    const buttons = document.getElementsByClassName('btn');
    buttons[7].innerHTML = "My Button";
    //console.log(buttons[7]);

    const buttons_warning = document.getElementsByClassName('btn-warning');
    console.log(buttons_warning);

    const buttons_name = document.getElementsByName('genero');
    console.log(buttons_name);

    const buttons_btn = document.getElementsByTagName('button');
    console.log(buttons_btn);

    const html_h1 = document.createElement('h1');
    //html_h1.innerHTML = "Hola Mundo";
    const texto = document.createTextNode("Hola mundo desde el DOM");
    html_h1.appendChild(texto);
    
    document.body.appendChild(html_h1);

    let section = document.querySelector('#header');
    console.log(section);

    let sections = document.querySelectorAll('section');
    console.log(sections);

    let btns = document.querySelectorAll('.btn .text');   
    console.log(btns);
    
    btns.forEach((btn) => {
        btn.style.color = 'red';
    })

}