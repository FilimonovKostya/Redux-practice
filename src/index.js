import './styles.css'
import {createstore} from "./createStore";

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = createstore()

addBtn.addEventListener('click', () => {

})

subBtn.addEventListener('click', () => {

})

asyncBtn.addEventListener('click', () => {

})

themeBtn.addEventListener('click', () => {
    // document.body.classList.toggle('dark')
})
