let homecount = 0
let guestcount = 0
let homecounter = document.getElementById("home-counter")
let guestcounter = document.getElementById("guest-counter")
console.log(homecounter)

function homeaddone(){
    homecount += 1
    homecounter.textContent = homecount
}

function homeaddtwo(){
    homecount +=2
    homecounter.textContent = homecount
}

function homeaddthree(){
    homecount +=3
    homecounter.textContent = homecount
}

function guestaddone(){
    guestcount += 1
    guestcounter.textContent = guestcount
}

function guestaddtwo(){
    guestcount +=2
    guestcounter.textContent = guestcount
}

function guestaddthree(){
    guestcount +=3
    guestcounter.textContent = guestcount
}