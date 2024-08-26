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

// Инициализация всех Swiper контейнеров complex-development
const swipers = [];
document.querySelectorAll('.complex-development__swiper').forEach(container => {
    const swiper = new Swiper(container, {
        slidesPerView: 1,
        spaceBetween: 21,
        centeredSlides: true,

        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        
        speed: 600,

        navigation: {
            nextEl: container.querySelector('.complex-development__next'),
            prevEl: container.querySelector('.complex-development__prev'),
        },

        scrollbar: {
            el: container.querySelector('.swiper-scrollbar'),
            draggable: true,
        },
    });

    swipers.push(swiper);
});

// Обработчик события для переключения табов аккордеона
const tabControlsSwap = document.querySelector('.tab-controls-Swap');

tabControlsSwap.addEventListener('click', toggleTabSwap);

function toggleTabSwap(e) {
    const tabControlSwap = e.target.closest('.tab-controls__link-Swap');

    if (!tabControlSwap) return;
    e.preventDefault();
    if (tabControlSwap.classList.contains('tab-Swap--active')) return;

    const tapContentID = tabControlSwap.getAttribute('href');
    const tabContent = document.querySelector(tapContentID);
    const activeControl = document.querySelector('.tab-Swap--active');
    const activeContent = document.querySelector('.tab-content-Swap--show');

    if (activeControl) {
        activeControl.classList.remove('tab-Swap--active');
    }
    if (activeContent) {
        activeContent.classList.remove('tab-content-Swap--show');
    }

    tabControlSwap.classList.add('tab-Swap--active');
    tabContent.classList.add('tab-content-Swap--show');

    // Обновляем Swiper для активного таба
    const activeSwiperContainer = tabContent.querySelector('.complex-development__swiper');
    if (activeSwiperContainer) {
        const activeSwiper = swipers.find(sw => sw.el === activeSwiperContainer);
        if (activeSwiper && typeof activeSwiper.update === 'function') {
            activeSwiper.update();
            if (activeSwiper.scrollbar && typeof activeSwiper.scrollbar.updateSize === 'function') {
                activeSwiper.scrollbar.updateSize();
            }
        }
    }
}
// Обработчик события для переключения табов 2 аккордеона
const tabControlsSwap2 = document.querySelector('.tab2-controls-Swap');

tabControlsSwap2.addEventListener('click', toggleTabSwap2);

function toggleTabSwap2(e) {
    const tabControlSwap = e.target.closest('.tab2-controls__link-Swap');

    if (!tabControlSwap) return;
    e.preventDefault();
    if (tabControlSwap.classList.contains('tab2-Swap--active')) return;

    const tapContentID = tabControlSwap.getAttribute('href');
    const tabContent = document.querySelector(tapContentID);
    const activeControl = document.querySelector('.tab2-Swap--active');
    const activeContent = document.querySelector('.tab2-content-Swap--show');

    if (activeControl) {
        activeControl.classList.remove('tab2-Swap--active');
    }
    if (activeContent) {
        activeContent.classList.remove('tab2-content-Swap--show');
    }

    tabControlSwap.classList.add('tab2-Swap--active');
    tabContent.classList.add('tab2-content-Swap--show');

    // Обновляем Swiper для активного таба
    const activeSwiperContainer = tabContent.querySelector('.complex-development__swiper');
    if (activeSwiperContainer) {
        const activeSwiper = swipers.find(sw => sw.el === activeSwiperContainer);
        if (activeSwiper && typeof activeSwiper.update === 'function') {
            activeSwiper.update();
            if (activeSwiper.scrollbar && typeof activeSwiper.scrollbar.updateSize === 'function') {
                activeSwiper.scrollbar.updateSize();
            }
        }
    }
}

// Обработчик события для переключения табов 3 аккордеона
const tabControlsSwap3 = document.querySelector('.tab3-controls-Swap');

tabControlsSwap3.addEventListener('click', toggleTabSwap3);

function toggleTabSwap3(e) {
    const tabControlSwap = e.target.closest('.tab3-controls__link-Swap');

    if (!tabControlSwap) return;
    e.preventDefault();
    if (tabControlSwap.classList.contains('tab3-Swap--active')) return;

    const tapContentID = tabControlSwap.getAttribute('href');
    const tabContent = document.querySelector(tapContentID);
    const activeControl = document.querySelector('.tab3-Swap--active');
    const activeContent = document.querySelector('.tab3-content-Swap--show');

    if (activeControl) {
        activeControl.classList.remove('tab3-Swap--active');
    }
    if (activeContent) {
        activeContent.classList.remove('tab3-content-Swap--show');
    }

    tabControlSwap.classList.add('tab3-Swap--active');
    tabContent.classList.add('tab3-content-Swap--show');

    // Обновляем Swiper для активного таба
    const activeSwiperContainer = tabContent.querySelector('.complex-development__swiper');
    if (activeSwiperContainer) {
        const activeSwiper = swipers.find(sw => sw.el === activeSwiperContainer);
        if (activeSwiper && typeof activeSwiper.update === 'function') {
            activeSwiper.update();
            if (activeSwiper.scrollbar && typeof activeSwiper.scrollbar.updateSize === 'function') {
                activeSwiper.scrollbar.updateSize();
            }
        }
    }
}
// Обработчик события для переключения табов 3 аккордеона
const tabControlsSwap4 = document.querySelector('.tab4-controls-Swap');

tabControlsSwap4.addEventListener('click', toggleTabSwap4);

function toggleTabSwap4(e) {
    const tabControlSwap = e.target.closest('.tab4-controls__link-Swap');

    if (!tabControlSwap) return;
    e.preventDefault();
    if (tabControlSwap.classList.contains('tab4-Swap--active')) return;

    const tapContentID = tabControlSwap.getAttribute('href');
    const tabContent = document.querySelector(tapContentID);
    const activeControl = document.querySelector('.tab4-Swap--active');
    const activeContent = document.querySelector('.tab4-content-Swap--show');

    if (activeControl) {
        activeControl.classList.remove('tab4-Swap--active');
    }
    if (activeContent) {
        activeContent.classList.remove('tab4-content-Swap--show');
    }

    tabControlSwap.classList.add('tab4-Swap--active');
    tabContent.classList.add('tab4-content-Swap--show');

    // Обновляем Swiper для активного таба
    const activeSwiperContainer = tabContent.querySelector('.complex-development__swiper');
    if (activeSwiperContainer) {
        const activeSwiper = swipers.find(sw => sw.el === activeSwiperContainer);
        if (activeSwiper && typeof activeSwiper.update === 'function') {
            activeSwiper.update();
            if (activeSwiper.scrollbar && typeof activeSwiper.scrollbar.updateSize === 'function') {
                activeSwiper.scrollbar.updateSize();
            }
        }
    }
}

    // модалка 1
    const btnOpen = document.querySelectorAll('.complex-development-modal')
    const modal = document.querySelector('.modal')
    const bodyFixed = document.body


    const modalClose = () => {
        modal.classList.remove('modal--opend')
        bodyFixed.classList.remove('body--opend-modal')
    }

    const modalOpen = () => {
        modal.classList.add('modal--opend')
        bodyFixed.classList.add('body--opend-modal')
    }


    btnOpen.forEach(el => {
        el.addEventListener('click', modalOpen)
    });

    modal.addEventListener('click', event => {
        event.preventDefault()
        const target = event.target
        if (target.closest('.modal__close') || target.classList.contains('modal--opend')) {
            modalClose()
        } else {
            return
        }
    })
    document.addEventListener('keydown', event => {
        if (event.code === 'Escape' && modal.classList.contains('modal--opend')) {
            modalClose()
        }
    })


    // модалка 2
    const btnOpen2 = document.querySelectorAll('.architectural-modal')
    const modal2 = document.querySelector('.modal2')
    


    const modalClose2 = () => {
        modal2.classList.remove('modal--opend')
        bodyFixed.classList.remove('body--opend-modal')
    }

    const modalOpen2 = () => {
        modal2.classList.add('modal--opend')
        bodyFixed.classList.add('body--opend-modal')
    }


    btnOpen2.forEach(el => {
        el.addEventListener('click', modalOpen2)
    });

    modal2.addEventListener('click', event => {
        event.preventDefault()
        const target = event.target
        if (target.closest('.modal2__close') || target.classList.contains('modal--opend')) {
            modalClose2()
        } else {
            return
        }
    })
    document.addEventListener('keydown', event => {
        if (event.code === 'Escape' && modal.classList.contains('modal--opend')) {
            modalClose2()
        }
    })
    // модалка 3
    const btnOpen3 = document.querySelectorAll('.interior-modal')
    const modal3 = document.querySelector('.modal2')
    


    const modalClose3 = () => {
        modal3.classList.remove('modal--opend')
        bodyFixed.classList.remove('body--opend-modal')
    }

    const modalOpen3 = () => {
        modal3.classList.add('modal--opend')
        bodyFixed.classList.add('body--opend-modal')
    }


    btnOpen3.forEach(el => {
        el.addEventListener('click', modalOpen3)
    });

    modal3.addEventListener('click', event => {
        event.preventDefault()
        const target = event.target
        if (target.closest('.modal2__close') || target.classList.contains('modal--opend')) {
            modalClose3()
        } else {
            return
        }
    })
    document.addEventListener('keydown', event => {
        if (event.code === 'Escape' && modal.classList.contains('modal--opend')) {
            modalClose3()
        }
    })




})()