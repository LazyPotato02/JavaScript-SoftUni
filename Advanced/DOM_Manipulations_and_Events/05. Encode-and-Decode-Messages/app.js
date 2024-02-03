function encodeAndDecodeMessages() {
    let encodeSendBtn = document.getElementsByTagName('button')[0]
    let decodeReceiveBtn = document.getElementsByTagName('button')[1]

    let encodeTextArea = document.getElementsByTagName('textarea')[0]
    let decodeTextArea = document.getElementsByTagName('textarea')[1]

    encodeSendBtn.addEventListener("click", encode)
    decodeReceiveBtn.addEventListener("click", decode)



    function encode() {
        let resultArray = []
        let string = encodeTextArea.value
        for (let i = 0; i < string.length; i++) {
            let code = string.charCodeAt(i) + 1
            while (code > 122) {
                code = (code - 122) + 96
            }
            resultArray.push(String.fromCharCode(code))
        }
        encodeTextArea.value = ''
        decodeTextArea.value = resultArray.join('')
    }

    function decode() {
        let resultArray = []
        let string = decodeTextArea.value
        for (let i = 0; i < string.length; i++) {
            let code = string.charCodeAt(i) - 1
            while (code > 122) {
                code = (code - 122) + 96
            }
            resultArray.push(String.fromCharCode(code))
        }
        decodeTextArea.value = resultArray.join('')
    }
}