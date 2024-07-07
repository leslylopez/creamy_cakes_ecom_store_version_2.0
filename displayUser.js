'use strict'
window.onload = ()=>{
    loggedInUserDisplay()
}
// loggedInUserDisplay function display user's username
function loggedInUserDisplay(){
   document.getElementById('loggedInUser').innerHTML = `${window.localStorage.getItem('inputUsername')}`
}