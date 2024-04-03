import { getEventById, updateEvent } from "../data/events.js";
import { html, page, render } from "../lib.js";
import { createSubmitHander } from "../util.js";


const editTemplate = (item,handler) => html`
<section id="edit">
  <div class="form form-item">
    <h2>Edit Your Item</h2>
    <form @submit=${handler} class="edit-form" data-id=${item._id}>
      <input type="text" name="item" id="item" placeholder="Item" value=${item.item} />
      <input
        type="text"
        name="imageUrl"
        id="item-image"
        placeholder="Your item Image URL"
        value=${item.imageUrl} 
      />
      <input type="text" name="price" id="price" placeholder="Price in Euro" value=${item.price} />
      <input
        type="text"
        name="availability"
        id="availability"
        placeholder="Availability Information"
        value=${item.availability} 
      />
      <input type="text" name="type" id="type" placeholder="Item Type" value=${item.type} />
      <textarea
        id="description"
        name="description"
        placeholder="More About The Item"
        rows="10"
        cols="50"

      >${item.description} </textarea>
      <button type="submit">Edit</button>
    </form>
  </div>
</section>
`

export async function showEditView(ctx){
    const id = ctx.params.id
    const handler = createSubmitHander(onSubmit)
    const data = await getEventById(id)
    render(editTemplate(data,handler))
}


async function onSubmit(data,form) {
    const id = form.dataset.id

    const { availability, description, imageUrl, item, price, type } = data

    if (!availability || !description || !imageUrl || !item || !price || !type){
        return alert('All fields are required')
    }
    await updateEvent(id,data)
    page.redirect(`/details/${id}`)

}