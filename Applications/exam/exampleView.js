import { html, render } from "../lib.js";
import { createSubmitHander } from "../util.js";

const exampleTemplate = (onSubmit) => html`
<section>
    <p>Sample content</p>
</section>
`
// Display
export function showEample(ctx) {
    render(exampleTemplate())
}

// Display with form functionality
export function showEample(ctx) {
    render(exampleTemplate(createSubmitHander(onSubmit)))
}

function onSubmit(data,form){

}