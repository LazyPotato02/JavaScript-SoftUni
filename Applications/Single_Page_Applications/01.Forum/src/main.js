const section = document.querySelector('div.new-topic-border')
const form = section.querySelector('form')
const URL = 'http://localhost:3030/jsonstore/collections/myboard/posts'

const container = document.querySelector('.topic-container')


form.addEventListener('submit', function (event) {
    event.preventDefault()

    const formData = new FormData(form)

    const topicName = formData.get('topicName');
    const username = formData.get('username');
    const postText = formData.get('postText');

    if (!topicName || !username || !postText) {
        // alert('Please fill in all required fields.');
        return;
    }

    const requestBody = {
        topicName: topicName, username: username, postText: postText
    };

    fetch(URL, {
        method: 'POST', headers: {
            'Content-Type': 'application/json',
        }, body: JSON.stringify(requestBody),
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        console.log('Post successful:', data);
        form.reset();
    }).catch(error => {
        console.error('There was a problem with the POST request:', error);
    });

})


document.addEventListener('DOMContentLoaded', () => {
    try {
        fetch(URL, {
            method: 'GET', headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {
            console.log(true)
            for (const datum in data) {

                const topicName = data[datum]['topicName']
                const username = data[datum]['username']
                let htmlContent = `
                    <div class="topic-name-wrapper">
                        <div class="topic-name">
                            <a href="#" class="normal">
                                <h2>${topicName}</h2>
                            </a>
                            <div class="columns">
                                <div>
                                    <p>Date: <time>2020-10-10T12:08:28.451Z</time></p>
                                    <div class="nick-name">
                                        <p>Username: <span>${username}</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                container.innerHTML += htmlContent
                console.log(data[datum])
            }
        }).catch(error => {
            console.error('There was a problem with the GET request:', error);
        });
    } catch (err) {
        console.log(err.text)
    }
})