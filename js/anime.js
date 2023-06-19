function renderListas() {
  const lista = JSON.parse(localStorage.getItem("productoSeleccionado"));
  let contenido = `
    <div class="col-md-4 offset-md-2">
      <h3>${lista.nombre}</h3>
      <img src="${lista.imagen}" class="img-fluid" alt="${lista.nombre}">
    </div>
    <div class="col-md-4">
      <h4 class="text-body-secondary"><p>sinopsis</p>${lista.Sinopsis}</h4>  
      <p class="my-5"><button class="btn btn-dark" onclick="añadirfavorito"(${lista.id});><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
      </svg></button></p>
    </div>`;
  document.getElementById("contenido").innerHTML = contenido;
}

renderListas();
