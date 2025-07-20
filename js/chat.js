import {DATA} from './data.js'

const contentEL = document.querySelector(".content")
const formEL = document.querySelector(".form")
const inputEL = document.querySelector(".input")

const getTimeFormat = () => {
    let date = new Date()
    return `${date.getHours()}:${date.getMinutes()}`;
}

const randomMessage = () => {
    let index = Math.floor(Math.random() * DATA.length)
    const divEl = document.createElement("div")
    divEl.className = "msg"

    divEl.innerHTML = `
    <p>${DATA[index]}</p>
    <span>${getTimeFormat()}</span>
    `
    contentEL.appendChild(divEl)
}

formEL.addEventListener("submit", (event) => {
    event.preventDefault()

    const value = inputEL.value

    if(!value.trim()) return null

    const divEl = document.createElement("div")
    divEl.className = "msg me"

    divEl.innerHTML = `
    <p>${value}</p>
    <span>${getTimeFormat()}</span>
    `
    contentEL.appendChild(divEl)
    inputEL.value = ""
    setTimeout(() =>{
        randomMessage();
    }, 2000)
});