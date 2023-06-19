const lista = [
    {id:1,nombre:"Oshi No Ko",imagen:"https://static.animeid.tv/art/oshi-no-ko/cover/01813169.jpg",Sinopsis:"La chica de 16 años, Ai Hoshino, es una talentosa y hermosa idol que es adorada por sus fanáticos. Ella es la personificación de la pureza, pero no todo lo que brilla es oro… Gorou Honda es un ginecólogo de una zona rural y gran fanático de Ai."},
    {id:2,nombre:"Ousama Ranking: Yuuki no Takarabako",imagen:"https://static.animeid.tv/art/ousama-ranking-yuuki-no-takarabako/cover/a5bd5d69.jpg",Sinopsis:"a historia se centra en Bojji, un débil y sordo príncipe que no puede sostener incluso una espada para niños. Como el primogénito, sostiene su enorme deseo de convertirse en el más poderoso rey del mundo. No obstante"},
    {id:3,nombre:"Gotoubun no Hanayome",imagen:"https://static.animeid.tv/art/gotoubun-no-hanayome-2nd-season/cover/706e2581.jpg",Sinopsis:"uutarou Uesugi es un estudiante de segundo año de preparatoria/instituto cuya familia siempre ha sido muy pobre. Un día recibe una suculenta oferta de trabajo como tutor a medio tiempo"},
    {id:4,nombre:"Kanojo ga Koushaku-tei ni Itta Riyuu",imagen:"https://static.animeid.tv/art/kanojo-ga-koushaku-tei-ni-itta-riyuu/cover/5f6265d9.jpg",Sinopsis:"Eunha Park pensó que tenía otra oportunidad en la vida cuando despertó en el mundo de una novela. ¿El único problema? ¡Raeliana McMillan, el personaje en el que renació, está destinada a ser asesinada por su prometido! Por el bien de su supervivencia"},
    {id:5,nombre:"Megami no Café Terrace",imagen:"https://static.animeid.tv/art/megami-no-cafe-terrace/cover/06fbfe8c.jpg",Sinopsis:"Hayato Kasukabe ha sido aceptado en la Universidad de Tokio en su primer intento. Al recibir la noticia de la muerte de su abuela, regresa a la casa de su infancia, el Café Terrace Familia"},
    {id:6,nombre:"Otonari ni Ginga",imagen:"https://static.animeid.tv/art/otonari-ni-ginga/cover/f5f8f9c4.jpg",Sinopsis:"Desde que su padre murió, Ichirou Kuga ha luchado para mantener a sus dos hermanos menores con nada más que una pequeña herencia y su pasión por dibujar manga"},
    {id:7,nombre:"Kaminaki Sekai no Kamisama Katsudou",imagen:"https://static.animeid.tv/art/kaminaki-sekai-no-kamisama-katsudou/cover/4ec8fcc5.jpg",Sinopsis:"Yukito nació como hijo del fundador de un culto que venera al misterioso dios Mitama, del que se dice que es omnisciente y omnipotente. Se ve obligado a participar en un ritual para convertirse en el próximo gurú de la organización y pierde la vida en un accidente durante la ceremonia."},
    {id:8,nombre:"Mahoutsukai no Yome",imagen:"https://static.animeid.tv/art/mahoutsukai-no-yome/cover/914e7af9.jpg",Sinopsis:"Chise Hatori, 15 años. Perdida, sin esperanza y sin familia, la compran por dinero. Pero quien la compra no es otra persona, sino un hechicero no humano llamado Elias. Aunque al inicio duda"}
];

function guardarListaEnLS(){
    localStorage.setItem("lista", JSON.stringify(lista));
}

function cargarListaDesdeLS(){
    return JSON.parse(localStorage.getItem("lista"));
}

guardarListaEnLS();

function renderLista(){
    let lista = cargarListaDesdeLS();
    let contenido = "";
    lista.forEach(item => {
        contenido += `<div class="col-md-4 offset-md-2 ">
        <a href="anime.html" onclick="verProducto(${item.id});" class="text-decoration-none">
        <h3>${item.nombre}</h3>
        <img src="${item.imagen}" class="img-fluid" alt="${item.nombre}">
        </a>
        </div>
        <div class="col-md-4">
            <h4 class=".text-body-secondary text-center ">${item.Sinopsis}</h4>
        </div>`;      
    });
    document.getElementById("contenido").innerHTML = contenido;
}

function verProducto(id) {
    let lista = cargarListaDesdeLS();
    let producto = lista.find(item => item.id === id);
    localStorage.setItem("productoSeleccionado", JSON.stringify(producto));
}



renderLista();

