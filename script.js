let call = document.querySelector('.header__call')

// const mainElementWidth = document.documentElement.clientWidth
// console.log(mainElementWidth)


function callMe () {
    call.innerHTML = `CALL ME`
}

function resize () {
    window.status = document.body.clientWidth
    // console.log(window.status)
    
    if (parseInt(window.status) < 1024) {
        callMe()
    }
}

window.onresize = resize

const burger = document.getElementById('burger')
const burgerList = document.querySelector('.header__list')
const burgerSpan = document.querySelectorAll('.burger__span')
console.log(burgerSpan)

burgerSpan.forEach(el => {
    console.log(el)
    // burgerSpan.classList.toggle('active')
})

burger.addEventListener('click', function () {
    burgerList.classList.toggle('active')
})