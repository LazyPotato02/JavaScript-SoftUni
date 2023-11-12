function extractFile(file) {
    let splitFiles = file.split('\\')
    let neededFile = splitFiles[splitFiles.length -1 ]
    let extension = neededFile.slice(neededFile.lastIndexOf('.')+1)
    let fileName = neededFile.slice(0, neededFile.lastIndexOf('.'))

    console.log(`File name: ${fileName}`)
    console.log(`File extension: ${extension}`)
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')