import { getAllEvents } from "../data/events.js";
import { html, render } from "../lib.js";

const dashboardTemplate = (data) => html`
    <h3 class="heading">Market</h3>
    ${data.length? dashboardSectionData(data) : html`<h3 class="empty">No Items Yet</h3>`}

`

const marketTemplate = (item) => html`
<div class="item">
    <img src="${item.imageUrl}" alt="example1" />
    <h3 class="model">${item.item}</h3>
    <div class="item-info">
      <p class="price">Price: €${item.price}</p>
      <p class="availability">${item.availability}</p>
      <p class="type">Type: ${item.type}</p>
    </div>
    <a class="details-btn" href="/details/${item._id}">Uncover More</a>
</div>
`

const dashboardSectionData = (data) => html`
<section id="dashboard">
  ${data.map(item => marketTemplate(item))}
</section>`

export async function showDashboardView() {
    const data = await getAllEvents()
    render((dashboardTemplate(data)))
}