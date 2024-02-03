function toggle() {

    let extraText = document.getElementById('extra')
    let btn = document.getElementsByClassName("button")[0]
    if (btn.textContent === 'More'){
        extraText.style.display = 'block'
        btn.textContent = 'Less'

    }else if(btn.textContent === 'Less'){
        extraText.style.display = 'none'
        btn.textContent = 'More'


    }

}