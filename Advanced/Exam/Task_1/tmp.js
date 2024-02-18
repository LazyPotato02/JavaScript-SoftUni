const addBtn = document.querySelector('.add-btn');
const snowmanName = document.getElementById('snowman-name');
const snowmanHeight = document.getElementById('snowman-height');
const locationInput = document.getElementById('location');
const creatorName = document.getElementById('creator-name');
const specialAttribute = document.getElementById('special-attribute');
const snowmanPreview = document.querySelector('.snowman-preview');
const snowList = document.querySelector('.snow-list');

addBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const name = snowmanName.value.trim();
    const height = snowmanHeight.value.trim();
    const location = locationInput.value.trim();
    const creator = creatorName.value.trim();
    const attribute = specialAttribute.value.trim();

    if (name && height && location && creator && attribute) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
                <article>
                    <p>Name: ${name}</p>
                    <p>Height: ${height} cm</p>
                    <p>Location: ${location}</p>
                    <p>Creator: ${creator}</p>
                    <p>Attribute: ${attribute}</p>
                </article>
                <div class="btn-container">
                    <button class="edit-btn">Edit</button>
                    <button class="next-btn">Next</button>
                </div>
            `;
        snowmanPreview.appendChild(listItem);

        snowmanName.value = '';
        snowmanHeight.value = '';
        locationInput.value = '';
        creatorName.value = '';
        specialAttribute.selectedIndex = 0;
        addBtn.disabled = true;
    }
});

snowmanPreview.addEventListener('click', function (event) {
    if (event.target.classList.contains('edit-btn')) {
        const listItem = event.target.closest('li');
        const article = listItem.querySelector('article');

        snowmanName.value = article.querySelector('p:nth-child(1)').textContent.split(': ')[1];
        snowmanHeight.value = article.querySelector('p:nth-child(2)').textContent.split(': ')[1].split(' ')[0];
        locationInput.value = article.querySelector('p:nth-child(3)').textContent.split(': ')[1];
        creatorName.value = article.querySelector('p:nth-child(4)').textContent.split(': ')[1];
        specialAttribute.value = article.querySelector('p:nth-child(5)').textContent.split(': ')[1];

        listItem.remove();
        addBtn.disabled = false;
    } else if (event.target.classList.contains('next-btn')) {
        const listItem = event.target.closest('li');
        const article = listItem.querySelector('article');

        const snowListItem = document.createElement('li');
        snowListItem.innerHTML = article.innerHTML;
        snowList.appendChild(snowListItem);

        listItem.remove();
        snowList.querySelector('.btn-container').appendChild('<button class="send-btn">Send</button>')
    }
});

snowList.addEventListener('click', function (event) {
    if (event.target.classList.contains('send-btn')) {
        const mainElement = document.getElementById('hero');
        mainElement.remove();

        const body = document.querySelector('body');
        const backImg = document.getElementById('back-img');
        backImg.removeAttribute('hidden');
        const backBtn = document.createElement('button');
        backBtn.textContent = 'Back';
        backBtn.addEventListener('click', function () {
            window.location.reload();
        });
        body.appendChild(backBtn);
    }
});