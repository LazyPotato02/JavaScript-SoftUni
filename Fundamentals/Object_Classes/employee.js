function employees(array){
    for (let name of array){
        console.log(`Name: ${name} -- Personal Number: ${name.length} `)
    }
}
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ])