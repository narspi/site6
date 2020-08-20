$(function(){
    $('.header__slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 500,
        speed: 1000,
        swipe: false,
        appendDots: '.header__pagination-inner',
        zIndex: 99,
    })



    $('.location__slider').slick({
        fade: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        swipe: false,
        arrows: true,
        dots: true,
        prevArrow: `<button type="button" class="slick-arrows slick-prev">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="btn-color" fill-rule="evenodd" clip-rule="evenodd" d="M16 7H3.8L9.4 1.4L8 0L0 8L8 16L9.4 14.6L3.8 9H16V7Z" fill="#01b6df"/>
                        </svg>        
                    </button>`,
        nextArrow: `<button type="button" class="slick-arrows slick-next">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path class="btn-color" fill-rule="evenodd" clip-rule="evenodd" d="M0 7H12.2L6.6 1.4L8 0L16 8L8 16L6.6 14.6L12.2 9H0V7Z" fill="#01b6df"/>
                        </svg>
                    </button>`,
        appendArrows: '.location__arrows-inner',
        zIndex: 99,
        appendDots: '.location__dots-inner',
    });



});

let count=0;
$('.location__item').each(function(){
    count = count + 1;
})

$('.location__dots-amount').text('/' + count);


$('.header__burger').on('click', function (){
    $('.header__burger').toggleClass('active');
    $('.menu__list').toggleClass('menu__list--active');
});