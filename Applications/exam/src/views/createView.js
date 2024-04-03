import { createEvent } from "../data/events.js";
import { html, page, render } from "../lib.js";
import { createSubmitHander } from "../util.js";


const createTemplate = (handler) => html`
<section id="create">
  <div class="form form-item">
    <h2>Share Your item</h2>
    <form @submit=${handler} class="create-form">
      <input type="text" name="item" id="item" placeholder="Item" />
      <input
        type="text"
        name="imageUrl"
        id="item-image"
        placeholder="Your item Image URL"
      />
      <input type="text" name="price" id="price" placeholder="Price in Euro" />
      <input
        type="text"
        name="availability"
        id="availability"
        placeholder="Availability Information"
      />
      <input type="text" name="type" id="type" placeholder="Item Type" />
      <textarea
        id="description"
        name="description"
        placeholder="More About The Item"
        rows="10"
        cols="50"
      ></textarea>
      <button type="submit">Add</button>
    </form>
  </div>
</section>
`

// redirect to markett

export function showCreateView() {
    const handler = createSubmitHander(onSubmit)


    render(createTemplate(handler))
}



async function onSubmit(data, form) {
    const { availability, description, imageUrl, item, price, type } = data

    if (!availability || !description || !imageUrl || !item || !price || !type){
        return alert('All fields are required')
    }

    await createEvent(data)
    page.redirect('/dashboard')
}