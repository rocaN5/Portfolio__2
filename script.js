const prevIcon = '<img src="./img/resent__projects/left.svg">'
const nextIcon = '<img src="./img/resent__projects/right.svg">'

$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 0,
    dots: false,
    nav:true,
    autoplay: true,
    navText: [
        prevIcon,
        nextIcon
    ],
    responsive:{
        0:{
            items:1
        },
        365:{
            items:1,
            autoWidth: true
        },
        992:{
            items:1,
            autoWidth: true
        },
        1700:{
            items:2,
            autoWidth: true
        },
        1800:{
            items:3,
            center: true
        }
    }
})