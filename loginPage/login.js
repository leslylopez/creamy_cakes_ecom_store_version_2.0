'use strict'
window.onload = () =>{
    let loginForm = document.getElementById('loginForm')
    loginForm.addEventListener('submit', login)
}

// create a function that accesses local storage and if user is found alert and redirect him to home page if no user is found alert inccorrect username or password 
let login = (event)=>{
    event.preventDefault()
    let username = window.localStorage.getItem('inputUsername')
    let password = window.localStorage.getItem('inputPassword')
    if(event.target.username.value === username && event.target.password1.value === password){
        alert(`Logged in as ${username}`)
        event.target.reset()
        window.location.href = '../index.html'
    }else{
        alert('INCORRECT PASSWORD OR USERNAME')
    }
}