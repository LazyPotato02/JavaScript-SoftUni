function solve() {
    let resultContainer = document.getElementById('result')
    let text = document.getElementById('text').value
    let namingConvention = document.getElementById('naming-convention').value

    if (namingConvention === 'Camel Case') {
        let textList = text.split(' ');
        let convertedArr = []
        let count = 0
        for (let element of textList) {
            element = element.toLowerCase()
            if (count > 0) {
                let firstChar = element[0].toUpperCase()
                let slicedElement = element.slice(1)
                let result = firstChar + slicedElement
                convertedArr.push(result)
                continue
            } else {
                convertedArr.push(element)
            }
            count++
        }
        resultContainer.textContent = convertedArr.join('')

    } else if (namingConvention === 'Pascal Case') {
        let textList = text.split(' ');
        let convertedArr = []
        for (let element of textList) {
            element = element.toLowerCase()
            let firstChar = element[0].toUpperCase()
            let slicedElement = element.slice(1)
            let result = firstChar + slicedElement
            convertedArr.push(result)
        }
        resultContainer.textContent = convertedArr.join('')

    } else {
        resultContainer.textContent = 'Error!'

    }
}

