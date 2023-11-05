function employee(vars){
    for (const var1 of vars) {
        let newObj = {
            name : var1,
            personalNumber: var1.length
        }
        console.log(`Name: ${newObj.name} -- Personal Number: ${newObj.personalNumber}`)
    }
}
employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ])