import { dataService } from "../api/dataService.js"

const dashboardView = document.querySelector('div[data-view-name="dashboard"]')

let context = null

export async function showDashboardView(ctx) {
    context = ctx
    dashboardView.innerHTML = ''
    ctx.render(dashboardView)

    const data = await dataService.getAllIdeas()

    if (!data){
        dashboardView.innerHTML = `<h1>No ideas yet! Be the first one :)</h1>`
    }

    data.forEach(idea => {
        dashboardView.innerHTML += createIdeaTemp(idea)
    });

    dashboardView.querySelectorAll('a').forEach(a => a.addEventListener('click',onDetailsHandler))
}

function onDetailsHandler(e) {
    e.preventDefault()

    const id = e.target.dataset.id
    context.goTo('/details',id)
}


function createIdeaTemp(data){
    
    return `<div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
    <div class="card-body">
        <p class="card-text">${data.title}</p>
    </div>
    <img class="card-image" src="${data.img}" alt="Card image cap">
    <a class="btn" href="details" data-id=${data._id}>Details</a>
</div>`
}