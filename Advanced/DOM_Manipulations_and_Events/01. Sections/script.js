function create(words) {
   let content = document.getElementById('content')

   function showHide() {
      window.onclick = e => {
         if(e.target.firstChild.style.display === 'block'){
            e.target.firstChild.style.display = 'none'
         }else{
            e.target.firstChild.style.display = 'block'
         }
      }

   }

   for (let i = 0; i < words.length; i++) {
      let div = document.createElement('div')
      let p = document.createElement('p')
      div.addEventListener('click',showHide)
      p.textContent = words[i]
      p.style.display = 'none'
      div.appendChild(p)
      content.appendChild(div)

   }

}