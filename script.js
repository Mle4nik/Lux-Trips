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

const burger = document.querySelector('.header__burger')
const burgerList = document.querySelector('.header__list')
// const burgerSpan = document.querySelectorAll('.burger__span')
const body = document.body
// console.log(body)
// console.log(burgerSpan)

// burgerSpan.forEach(el => {
//     // console.log(el)
//     // burgerSpan.classList.toggle('active')
// })

burger.addEventListener('click', function () {
    burgerList.classList.toggle('active')
    body.classList.toggle('active')
    // burger.classList.toggle('is-active')
    if (burger.classList.contains('is-active')) {
        burger.classList.remove('is-active');
        burger.classList.add('back-active');
    } else {
        burger.classList.add('is-active');
        burger.classList.remove('back-active');
    }
})


window.onload = function () {
    let preload = document.getElementById('preloader')
    preload.style.display = 'none'
}