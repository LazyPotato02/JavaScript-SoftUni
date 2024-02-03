function search() {
   let lists = document.getElementsByTagName('li')
   let searchBox = document.getElementById('searchText').value
   let result = document.getElementById('result')
   let count = 0
   let matches = 0
   for (const listElement of lists) {
      let string = listElement.textContent
      if (!(searchBox === '')){
         if (string.includes(searchBox)){
            lists[count].style.fontWeight = 'bold'
            lists[count].style.textDecoration = 'underline'
            matches++
         }
      }
      count++

   }
   result.textContent = `${matches} matches found`
}
