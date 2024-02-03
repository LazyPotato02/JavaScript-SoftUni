// SOLUTION 1

// function solve() {
//     let inputBox = document.getElementById('input')
//     let output = document.getElementById('output')
//
//     let inputArr = inputBox.value.split('. ')
//     if (inputArr.length > 3) {
//         let result = []
//         let tempCollection = []
//         for (let i = 0; i < inputArr.length; i++) {
//             // debugger
//             if (i > 0) {
//                 if (i % 3 === 0) {
//                     let thirdSentence = tempCollection.join('.')
//                     tempCollection = []
//                     result.push(thirdSentence + '.')
//
//                 }
//             }
//             tempCollection.push(inputArr[i])
//         }
//         if (tempCollection.length > 0){
//             let leftSentences = tempCollection.join('.')
//             result.push(leftSentences)
//         }
//
//         for (const resultElement of result) {
//             let outputEl = document.createElement("p")
//             outputEl.textContent = resultElement
//             output.appendChild(outputEl)
//         }
//
//     } else {
//         let result = document.createElement("p")
//         result.textContent = inputArr.join('.')
//         output.appendChild(result)
//     }
// }
// SOLUTION 2
function solve() {
    const output = document.getElementById('output')
    const textArea = document.getElementById('input')
    let sentences = textArea.value.split('.')
    sentences.pop()

    while (sentences.length > 0) {
        let paragraphSentences = sentences.splice(0, 3)
            .map((p) => p.trimStart())
        const paragraph = document.createElement('p')
        paragraph.textContent = paragraphSentences.join('.') + '.'
        output.appendChild(paragraph)
    }
}