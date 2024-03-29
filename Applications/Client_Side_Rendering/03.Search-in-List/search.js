import { html, render } from './node_modules/lit-html/lit-html.js'
import { towns } from './towns.js'

const townsRoot = document.getElementById('towns')
const resultRoot = document.getElementById('result')
const inputRef = document.getElementById('searchText')
document.querySelector('button').addEventListener('click', search)


function update(match) {
   render(createUlTemplate(towns, match), townsRoot)
}

update()
function createUlTemplate(towns, match) {
   return html`
   <ul>
      ${towns.map(town => createLiTemplate(town, match?.includes(town)))}
   </ul>
   `
}

function createLiTemplate(town, isActive) {
   return html`
   <li class=${isActive ? 'active' : ''}>${town}</li>
   `
}

function search() {
   const searchText = inputRef.value
   const match = towns.filter(town => town.includes(searchText))
   update(match)
   renderMatchCount(match.length)
}


function renderMatchCount(count) {
   render(html`${count} matches found`, resultRoot)  
}



