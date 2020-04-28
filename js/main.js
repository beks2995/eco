$('.hamRotate').on('click',function () {
    $('.nav-overlay-left').toggleClass('active');
    $('.nav-overlay-right').toggleClass('active');
    $('.hamRotate').toggleClass('active');
    $('.line').toggleClass('active');
    $('main').toggleClass('active');
});


// открыть форму
$('.js-button-campaing').click(function(){
    $('main').addClass('active');
    $('.js-overlay-campaing').fadeIn();
    $('.js-overlay-campaing').addClass('disabled');
});

// закрыть форму крестиком
$('.js-close-campaing').click(function(){
    $('.js-overlay-campaing').fadeOut();
    $('main').removeClass('active');
});


// открыть видео
$('.js-play-campaing').click(function(){
    $('main').addClass('active');
    $('.js-video-overlay-campaing').fadeIn();
    $('.js-video-overlay-campaing').addClass('disabled');
});
// закрыть video крестиком
$('.js-close-video-campaing').click(function(){
    $('.js-video-overlay-campaing').fadeOut();
    $('main').removeClass('active');
});

// открыть сообщение
$('.js-submit-campaing').click(function(){
    $('main').addClass('active');
    $('.js-overlay-campaing').css('display', 'none');
    $('.js-message-overlay-campaing').fadeIn();
    $('.js-message-overlay-campaing').addClass('disabled');
    $('overlay').css('display', 'none');
});

// закрыть сообщение крестиком
$('.js-close-message-campaing').click(function(){
    $('.js-message-overlay-campaing').fadeOut();
    $('main').removeClass('active');
});


// Бургер меню
$('.burgerBtn').on('click',function () {
    $('.burgerBtn').toggleClass('active')
});

// Карусель
$("#project-wrapper").owlCarousel({
    dots: false,
    nav: false,
    slideSpeed: 300,
    autoHeight: false,
    responsive: {
        0: {
            items: 1
        },
        1400: {
            items: 1
        }
    }
});

// Кастомка кнопок навигации карусели
var owl = $('#project-wrapper');
owl.owlCarousel();
// Go to the next item
$('.nxtBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.prvBtn').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})
