function solve() {
    let addTaskInput1 = document.getElementById('task')
    let addTaskInput2 = document.getElementById('description')
    let addTaskInput3 = document.getElementById('date')

    let btnAddTask = document.getElementById('add')


    let openSection = document.getElementsByTagName('section')[1]
    let inProgressSection = document.getElementById('in-progress')
    let completeSection = document.getElementsByTagName('section')[3].children[1]

    btnAddTask.addEventListener('click', add)

    function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml) {
        const htmlElement = document.createElement(type);

        if (content && useInnerHtml) {
            htmlElement.innerHTML = content;
        } else {
            if (content && type !== 'input') {
                htmlElement.textContent = content;
            }

            if (content && type === 'input') {
                htmlElement.value = content;
            }
        }

        if (classes && classes.length > 0) {
            htmlElement.classList.add(...classes);
        }

        if (id) {
            htmlElement.id = id;
        }

        // { src: 'link', href: 'http' }
        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key])
            }
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }

        return htmlElement;
    }


    function add(event) {
        event.preventDefault()


        let taskName = addTaskInput1.value
        let description = addTaskInput2.value
        let date = addTaskInput3.value

        if (taskName && description && date) {
            let article = createElement('article', openSection, null, null, null, null, null)
            let h3 = createElement('h3', article, null, null, null, null, null)
            h3.textContent = taskName
            let p1 = createElement('p', article, null, null, null, null, null)
            p1.textContent = 'Description: ' + description
            let p2 = createElement('p', article, null, null, null, null, null)
            p2.textContent = 'Due date: ' + date
            let div = createElement('div', article, null, ['flex',], null, null, null)
            let btn1 = createElement('button', div, 'Start', ['green'], null, null, null)
            let btn2 = createElement('button', div, 'Delete', ['red'], null, null, null)
            btn1.addEventListener('click', start)
            btn2.addEventListener('click',deleteValue)
            addTaskInput1.value = ''
            addTaskInput2.value = ''
            addTaskInput3.value = ''
        }

    }

    function start() {
        let mainParent = this.parentNode.parentNode
        let [btn1,btn2] = this.parentNode.children

        btn1.className = 'red'
        btn2.className = 'orange'
        btn1.textContent = 'Delete'
        btn2.textContent = 'Finish'
        inProgressSection.append(mainParent)
        btn2.removeEventListener('click',deleteValue)
        btn1.addEventListener('click',deleteValue)
        btn2.addEventListener('click',finish)

    }

    function deleteValue() {
        let element = this.parentNode.parentNode
        element.remove()
    }

    function finish() {
        let mainParent = this.parentNode.parentNode
        let btnDiv = this.parentNode
        btnDiv.remove()
        completeSection.append(mainParent)
    }


}