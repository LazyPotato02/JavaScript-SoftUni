window.addEventListener("load", solve);

function solve() {

    function createElement(type, content, parentNode, id, classes, attributes) {
        const htmlElement = document.createElement(type)
        if (content && type !== 'input') {
            htmlElement.textContent = content
        }
        if (content && type === 'input') {
            htmlElement.value = content
        }
        if (id) {
            htmlElement.id = id
        }
        if (classes) {
            htmlElement.classList.add(...classes)
        }
        if (parentNode) {
            parentNode.appendChild(htmlElement)
        }
        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key])
            }
        }
        return htmlElement
    }
    // createElement('img', '', firstColumnTd, '', '', {src: img})


    let addBtn = document.querySelector('.add-btn')
    addBtn.addEventListener('click',addElement)
    let selectionOfInputs = document.getElementById('special-attribute')
    let snowmanPreview = document.getElementsByClassName('snowman-preview')[0]
    let snowmanName = document.getElementById('snowman-name')
    let snowmanHeight = document.getElementById('snowman-height')
    let location = document.getElementById('location')
    let creatorName = document.getElementById('creator-name')
    let selectedIdx = selectionOfInputs.options.selectedIndex
    let snowList = document.querySelector('.snow-list')

    function addElement(event) {
        event.preventDefault()
        let snowmanNameValue = snowmanName.value.trim()
        let snowmanHeightValue = snowmanHeight.value.trim()
        let locationValue = location.value.trim()
        let creatorNameValue = creatorName.value.trim()
        selectedIdx = selectionOfInputs.options.selectedIndex
        let selectedInputValue = selectionOfInputs.options.selectedIndex
        let selectedValue = selectionOfInputs[selectedInputValue].value.trim()


        if (snowmanNameValue && snowmanHeightValue &&locationValue && creatorNameValue &&selectedValue){

            let preview = createElement('li',null,snowmanPreview,null,['snowman-info',],null)
            let article = createElement('article',null,preview,null,null,null)
            let btnCollection = createElement('div',null,preview,null,['btn-container',])
            let editBtn = createElement('button','Edit',btnCollection,null,['edit-btn',])
            editBtn.addEventListener('click',editElement)
            let nextBtn = createElement('button','Next',btnCollection,null,['next-btn',])
            nextBtn.addEventListener('click',nextElement)
            createElement('p',`Name: ${snowmanNameValue}`,article,)
            createElement('p',`Height: ${snowmanHeightValue}`,article)
            createElement('p',`Location: ${locationValue}`,article)
            createElement('p',`Creator: ${creatorNameValue}`,article)
            createElement('p',`Attribute: ${selectedValue}`,article)

            snowmanName.value = ''
            snowmanHeight.value = ''
            location.value = ''
            creatorName.value = ''
            selectionOfInputs.selectedIndex = 0
            addBtn.disabled = true
        }
    }
    function editElement() {
        let divElement = document.querySelector('.snowman-info')
        let collection =document.querySelector('article')
        let values = []
        for (const collectionElement of collection.childNodes) {
            values.push(collectionElement.textContent.split(': ')[1])
        }
        divElement.remove()
        addBtn.disabled = false
        snowmanName.value = values[0]
        snowmanHeight.value = values[1]
        location.value = values[2]
        creatorName.value = values[3]
        selectionOfInputs.text = values[4]
        selectionOfInputs.selectedIndex = selectedIdx
    }

    function nextElement() {
        let elementToRemove = document.querySelector('.snowman-info')
        let divElement = document.querySelector('.snowman-info article')
        let content = createElement('li',null,snowList,['snowman-content'])
        let sendBtn = createElement('button','Send',divElement,['send-btn'])
        sendBtn.addEventListener('click',send)
        content.appendChild(divElement)
        elementToRemove.remove()


    }
    function send() {
        let body = document.querySelector('body')
        let mainElement = document.getElementById('hero')
        mainElement.remove()
        let backImg = document.getElementById('back-img')
        let backBtn = createElement('button','Back',body,['back-btn'])
        backBtn.addEventListener('click',back)
        backImg.removeAttribute("hidden");

    }
    function back() {
        window.location.reload();
    }

}