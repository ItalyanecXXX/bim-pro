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

    // таб
    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {
        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return

        const tapContentID = tabControl.getAttribute('href')
        const tabContent = document.querySelector(tapContentID)
        const activeControl = document.querySelector('.tab-controls__link--active')
        const activeContent = document.querySelector('.tab-content--show')

        if (activeControl) {
            activeControl.classList.remove('tab-controls__link--active')
        }
        if (activeContent) {
            activeContent.classList.remove('tab-content--show')
        }

        tabControl.classList.add('tab-controls__link--active')
        tabContent.classList.add('tab-content--show')

    }

    // Аккордион
    const accordionLists = document.querySelectorAll('.accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpendItem = accordionList.querySelector('.accordion-list__item--opened')
            const accordionOpendContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')


            const accordionControl = e.target.closest('.accordion-list__control');
            if (!accordionControl) return
            e.preventDefault()

            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;


            if (accordionOpendItem && accordionItem != accordionOpendItem) {
                accordionOpendContent.style.maxHeight = null;
                accordionOpendItem.classList.remove('accordion-list__item--opened');
            }
            accordionItem.classList.toggle('accordion-list__item--opened');

            if (accordionItem.classList.contains('accordion-list__item--opened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';

            } else {
                accordionContent.style.maxHeight = null;
            }



        });
    });



})()