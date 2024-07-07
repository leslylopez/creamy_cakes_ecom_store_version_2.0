'use strict'
// getLoginData function returns the user username
function getLoginData(){
    let loginUsername = window.localStorage.getItem('inputUsername')
   
    return loginUsername
}
// function isLoggedIn returns true or false depending if localStorage has users username saved
function isLoggedIn(){
    let loginData = getLoginData()
    return Boolean(loginData)
}
// logout function clears localStorage to log user out
function logout (){
    window.localStorage.clear()
    location.reload()
}

