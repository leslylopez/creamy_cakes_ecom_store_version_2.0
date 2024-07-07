'use strict'

// alers user when form fields are filled
let checkout = (event)=>{
    event.preventDefault()
    alert('Purchase Successful')
    event.target.reset()
}
let checkoutForm = document.getElementById('checkoutForm')
checkoutForm.addEventListener('submit', checkout)
