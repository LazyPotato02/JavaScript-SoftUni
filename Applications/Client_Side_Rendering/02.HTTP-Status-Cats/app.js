import { html, render } from './node_modules/lit-html/lit-html.js'
import { cats } from './catSeeder.js'

const root = document.getElementById('allCats')
render(createCards(cats),root)

function createCards(cats){
    return html`
    <ul>
        ${cats.map(cat => createCatCard(cat))}
    </ul>
    `
}


function createCatCard(cat) {
    return html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button @click=${toggleStatus} class="showBtn">Show status code</button>
            <div class="status" style="display: none" id="${cat.id}">
                <h4 class="card-title">Status Code: ${cat.statusCode}</h4>
                <p class="card-text">${cat.statusMessage}</p>
            </div>
        </div>
    </li>
    `
}


function toggleStatus(e){
    const container = e.target.parentElement.querySelector('div')
    const curentState = container.style.display
    if (curentState === 'none'){
        container.style.display = 'block'
        e.target.textContent = 'Hide status code' 
    }else{
        container.style.display = 'none'
        e.target.textContent = 'Show status code' 

    }
}
