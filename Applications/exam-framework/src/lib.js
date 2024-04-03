import {html, render as renderBase} from 'lit-html-path'
import page from 'page-path'
import {classMap} from 'class-map-lit-html-path'
import {styleMap} from 'style-map-lit-html-path'


const root = document.querySelector('main')

function render(templateResult){
    renderBase(templateResult, root)
}

export{
    html,
    render,
    page 
}