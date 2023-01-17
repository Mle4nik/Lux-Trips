// import Swiper, { Navigation } from 'swiper';

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


// инициализируем слайдер

// Swiper.use([Navigation]);

new Swiper('.image-slider', {
    // стрелки
    navigation: {
        nextEL: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true
    },

    slidesPerView: 3.5,

    spaceBetween: 30,

    // loop: true

    // centeredSlides: true

    autoplay: {
        delay: 60000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },

    breakpoints: {

        1699: {
            slidesPerView: 3.5
        },

        1399: {
            slidesPerView: 3,
            // spaceBetween: 30
        },

        1023: {
            slidesPerView: 2.5
        },

        767: {
            slidesPerView: 2
        },

        575: {
            slidesPerView: 1.8
        },

        440: {
            slidesPerView: 1.3
        },

        320: {
            slidesPerView: 1
        },

        0: {
            slidesPerView: 1
        },
    }
});