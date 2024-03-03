function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/messenger'

    document.getElementById('submit').addEventListener('click', async () =>{
        const author = document.querySelectorAll('input')[0]
        const message = document.querySelectorAll('input')[1]

        const obj = {
            author:author.value,
            content:message.value,
        }
        const res = await fetch(url,{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj)
        })
        author.value = ''
        message.value = ''
    })

    document.getElementById('refresh').addEventListener('click', async () => {
        const textArea = document.getElementById('messages')
        textArea.value = ''
        const res = await fetch(url,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
        const data = await res.json()
        for (const datum in data) {
            let tmpData = data[datum]
            textArea.value += `${tmpData['author']}: ${tmpData['content']}\n`
        }
        textArea.value = textArea.value.trim()

    })

}

attachEvents();