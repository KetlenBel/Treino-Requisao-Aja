const linkPrincipal = fetch("https://jsonplaceholder.typicode.com/todos/")
.then(respose => {
    return respose.json();
})
.then(jsonBody => {
    jsonBody.forEach(card => {
        creatCard(card);
    });
})

function createElement(tag, classe){
    const aux = document.createElement(tag);
    aux.classList.add(classe);
    return aux;
}

function creatCard(card){
const sectionContainer = document.getElementById("card-container");
const divConteudoCard = createElement("div", "conteudo-card");

const divUserId = createElement("div", "stilo-card");
const divId = createElement("div", "stilo-card");
const divTitulo = createElement("div", "stilo-card");
const divStatus = createElement("div", "stilo-card");
const inputUserId = document.createElement('input');
const inputId = document.createElement('input');
const inputTitulo = document.createElement('input');
const inputStatus = document.createElement('input');

const tituloUserId = document.createElement("p");
tituloUserId.textContent = "Código de Identificação Usuario:";
inputUserId.value = card.userId;
const tituloId = document.createElement("p");
tituloId.textContent = "ID:";
inputId.value = card.id;

const tituloFrase = document.createElement("p");
tituloFrase.textContent = "Título:";
inputTitulo.value = card.title;

const tituloStatus = document.createElement("p");
tituloStatus.textContent = "Status:";
inputStatus.value = card.completed;

sectionContainer.appendChild(divConteudoCard);
divConteudoCard.appendChild(divUserId);
divConteudoCard.appendChild(divId);
divConteudoCard.appendChild(divTitulo);
divConteudoCard.appendChild(divStatus);
divUserId.appendChild(tituloUserId);
divUserId.appendChild(inputUserId);
divId.appendChild(tituloId);
divId.appendChild(inputId);
divTitulo.appendChild(tituloFrase);
divTitulo.appendChild(inputTitulo);
divStatus.appendChild(tituloStatus);
divStatus.appendChild(inputStatus);
}











