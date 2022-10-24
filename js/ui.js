export const spinner = () => {
    const div = document.createElement('div');
    const html = 
    ` <div class="d-flex justify-content-center">
    <div class="spinner-border text-info" role="status">
      <span class="visually-hidden">aun no carga</span>
    </div>
  </div>`;
  div.innerHTML = html;
  return div;
  }

export const creaCard = (personaje) => {
    const card = document.createElement('div');
     const html = `
     <div class="card m-3" style="width: 18rem; float: left;">
     <img loading="lazy" src="${personaje.image}" class="card-img-top" alt="...">
     <div class="card-body">
       <h5 class="card-title">${personaje.name}</h5>
       <p class="card-text">${personaje.status}</p>
       <button  
       class="btn btn-primary btn-block"
       data-id="${personaje.id}"
       data-bs-toggle="modal" 
       data-bs-target="#exampleModal"> ve mas </button>
     </div>
   </div>`;
   card.innerHTML = html;
   return card;
 }

 export const modalBody = (personaje) => {
    const div = document.createElement('div');
    const origen = personaje.origin.name;
    const location = personaje.location.name;
    const episodes = personaje.episode.length;
    let html = '';
    html += origen ==='unknown'? `<h4> no se sabe de donde viene XD </h4>`:
                      `<h4>viene de ${origen}</h4> `;
    html += `<h4>se encuentra en ${location}</h4>`;
    html += `<img src = "${personaje.image}" class="rounded mx-auto d-block">`;
    html += `<h4> aparece en ${episodes} episodios</h4>`;
    div.innerHTML = html;
    return div;
  }

