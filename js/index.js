function sliderMain() {
    var swiper = new Swiper('.main .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ' .main .swiper-button-next',
            prevEl: ' .main .swiper-button-prev',
        },

    })
}



function sliderGallery() {
    var swiper = new Swiper('.index-gallery .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.index-gallery .swiper-button-next',
            prevEl: '.index-gallery .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            800: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            },
        }
    })
}

function sliderPartners() {
    var swiper = new Swiper('.partners .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.partners .swiper-button-next',
            prevEl: '.partners .swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 15
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            800: {
                slidesPerView: 3,
                spaceBetween: 40
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 45
            },
        }
    })
}


function sliderClients() {
    var swiper = new Swiper('.our-clients .swiper-container', {
        slidesPerView: 3,
        spaceBetween: 27,
        navigation: {
            nextEl: '.our-clients .swiper-button-next',
            prevEl: '.our-clients .swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            620: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 27
            },
            1200: {
                slidesPerView: 3,
            },
        }
    })
}


$(document).ready(function() {
    sliderMain()
    sliderGallery()
    sliderPartners()

    $(".select").niceSelect()
    $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7 (   )    -    ' });

    $(".nav__item").hover(onIn, onOut);
    $(".nav__item-show").click(function() {
        if ((window.innerWidth < 992)) {
            $(this).siblings(".nav__item-hidden").slideToggle()
        }

    })

    $(".nav__link-show").click(function() {
        $(this).siblings(".nav__dropdown").slideToggle()
    })


    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $("body").toggleClass("fixed-body")
        $(".header-bottom").toggleClass("header-bottom--active")
    })


    $(".info-card__btn").click(function() {
        $(this).toggleClass("info-card__btn--active")
        $(this).parents(".info-card__show").siblings(".info-card__hidden").slideToggle()
    })


    $(".tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".tab").removeClass("tab--active")
        $(this).addClass("tab--active")
        $(".tab__content").removeClass("tab__content--active")
        $(`.tab__content[data-tab-path="${path}"]`).addClass("tab__content--active")
        $(".mob-tabs__item").removeClass("mob-tabs__item--active")
        $(`.mob-tabs__item[data-tab-path="${path}"]`).addClass("mob-tabs__item--active")
        $(".mob-tabs__bg").removeClass("mob-tabs__bg--active")
        $(".tabs").removeClass("tabs--active")
    })

    $(".mob-tabs").click(function() {
        $(".mob-tabs__bg").addClass("mob-tabs__bg--active")
        $(".tabs").addClass("tabs--active")
    })

    $(".mob-tabs__bg").click(function() {
        $(this).removeClass("mob-tabs__bg--active")
        $(".tabs").removeClass("tabs--active")
    })

    $(".various").fancybox({
        maxWidth: 800,
        maxHeight: 600,
        fitToView: false,
        width: '70%',
        height: '70%',
        autoSize: false,
        closeClick: false,
        openEffect: 'none',
        closeEffect: 'none'
    });

    $(".doctor-info__group-btn").click(function() {
        $(this).toggleClass("doctor-info__group-btn--active")
        $(this).parents(".doctor-info__group-show").siblings(".doctor-info__items").children(".doctor-info__item--hidden").toggleClass("doctor-info__item--show")
    })


    $(".services__sidebar-open").click(function() {
        $("body").toggleClass("fixed-body")
        $(".services__sidebar-nav").toggleClass("services__sidebar-nav--active")
        $(".services__sidebar-bg").toggleClass("services__sidebar-bg--active")
        $('html, body').animate({
            scrollTop: 0
        }, 0);
    })

    $(".services__sidebar-bg").click(function() {
        $(this).removeClass("services__sidebar-bg--active")
        $("body").removeClass("fixed-body")
        $(".services__sidebar-nav").removeClass("services__sidebar-nav--active")
        $(".services__sidebar-open").removeClass("services__sidebar-open--active")
    })

    $(".date-input").click(function() {
        console.log(false)
        $("#modal3").modal('show')
        $("#modal2").modal('hide')
    })

    $(".modal__calendar-item--available").click(function() {
        $("#modal4").modal('show')
        $("#modal3").modal('hide')
    })

    $(".modal__calendar-mob-item").click(function() {
        $("#modal4").modal('show')
        $("#modal3").modal('hide')
    })

    $(".modal__time-item--active").click(function() {
        $("#modal2").modal('show')
        $("#modal4").modal('hide')
    })

    $(".modal__time-other").click(function() {
        $("#modal3").modal('show')
        $("#modal4").modal('hide')
    })

    $(".modal__calendar-mob-item").click(function() {
        $(".modal__calendar-mob-item").removeClass("modal__calendar-mob-item--active")
        $(this).addClass("modal__calendar-mob-item--active")
    })

})


function onIn() {
    if (window.innerWidth > 992) {
        let el = $(this)
        setTimeout(function() {
            if (el.is(':hover')) {
                console.log(el)
                el.children(".nav__item-show").addClass("nav__item-show--active")
            }
        }, 200);
    }
}

function onOut() {
    if (window.innerWidth > 992) {
        $(this).children(".nav__item-show").removeClass("nav__item-show--active")
    }
}