function changeMode(){
    changeClass()
    changeText()
}

function changeClass(){
    button.classList.toggle(darkModeClass)
    body.classList.toggle(darkModeClass)
    footer.classList.toggle(darkModeClass)
}

function changeText(){
    if(flag === 0){
        h1.innerHTML = "Dark Mode ON"
        button.innerHTML = "Light Mode"
        title.innerHTML = "Dark Mode"
        flag = 1
    }
    else{
        h1.innerHTML = "Light Mode ON"
        button.innerHTML = "Dark Mode"
        title.innerHTML = "Light Mode"
        flag = 0
    }
}

let flag = 0
const darkModeClass = "dark-mode" 
const button = document.getElementsByTagName('button')[0]
const h1 = document.getElementsByTagName('h1')[0]
const body = document.getElementsByTagName('body')[0]
const footer =document.getElementsByTagName('footer')[0]
const title =document.getElementsByTagName('title')[0]

button.addEventListener('click',changeMode)