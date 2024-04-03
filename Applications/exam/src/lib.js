import {html, render as renderBase} from '../node_modules/lit-html/lit-html.js'
import page from '../node_modules/page/page.mjs'
// import {classMap} from 'class-map-lit-html-path'
// import {styleMap} from 'style-map-lit-html-path'


const root = document.querySelector('main')

function render(templateResult){
    renderBase(templateResult, root)

}

export{
    html,
    render,
    page 
}