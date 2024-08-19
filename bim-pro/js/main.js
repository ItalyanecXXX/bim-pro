(function () {
    // бургер меню
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.header__nav-link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opend-menu')) {
            document.body.classList.add('body--opend-menu')
        } else {
            document.body.classList.remove('body--opend-menu')
        }

    }


    // Слайды главная
    new Swiper('.hero__swiper', {
        // Optional parameters
        slidesPerView: 1,
        spaceBetween: 21,
        centeredSlides: true,

        navigation: {
            nextEl: '.hero__next',
            prevEl: '.hero__prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },

        breakpoints: {
            901: {
                centeredSlides: false,
            },
        }

    });

    // анимация числа
    const time = 5000;
    const step = 1;

    function outNum(num, elem) {
        let e = document.querySelector("#out");
        n = 0;
        let t = Math.round(time / (num / step));
        let interval = setInterval(() => {
            n = n + step;
            if (n == num) {              
                n = 0;
            }
            e.innerHTML = n;
        }, t);
    }

    outNum(20, "#out");



})()