'use strict'
window.onload = ()=>{
    let registerForm = document.getElementById('registerForm')
    registerForm.addEventListener('submit', createUser)

    
}
// created a function createUser that makes an object of all data user put and set username and password to local sotrage. If local storage is found after register, redirect them to login
let createUser = (event)=>{
    event.preventDefault()
    if(event.target.inputPasswordConfirmation.value === event.target.inputPassword.value ){
        let formData = new FormData(event.target)
    let object = Object.fromEntries(formData)

    console.log(object)
    window.localStorage.setItem('inputUsername', event.target.inputUsername.value)
    window.localStorage.setItem('inputPassword', event.target.inputPassword.value)

    let valueFromUsername = window.localStorage.getItem('inputUsername')
    let valueFromPassword = window.localStorage.getItem('inputPassword')
    
    if(valueFromUsername&& valueFromPassword){
        event.target.reset()
        alert(`Successfuly Created ${valueFromUsername}`)
        window.location.href = '../loginPage/login.html'
    }
    }else{
        return alert('Passwords do not match')
    }
    

}