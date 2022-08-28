function commonElements(list1,list2){
    let commonElementslist = []
    for (let el of list1){
        if (list2.includes(el)){
            commonElementslist.push(el)
        }
    }
    console.log(commonElementslist.join('\n'))
}   
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])