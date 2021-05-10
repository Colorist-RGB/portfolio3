// 슬릭 슬라이더1
$(".slide_group1").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 4000, // 간격시간
    dots: true, // 동그라미버튼
    speed: 600, // 바뀌는시간(생략가능)
    slidesToShow: 1, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    pauseOnDotsHover: true, // 동그라미번호버튼에 호버시 멈춤여부(생략가능)
    pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
    cssEase: 'linear', // 속도함수(생략가능)
    draggable: true, // 마우스드래그시 슬라이드 교체가능여부(생략가능)
    fade: true, // 슬라이드가 수평으로 이동하지 않고, 제자리에서 사라지고 나타남(생략가능)
    arrows: true, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})

// 슬릭 슬라이더2
$(".slide_group2").slick({
    autoplay: true, // 자동재생
    autoplaySpeed: 1000, // 간격시간
    dots: false, // 동그라미버튼
    speed: 1000, // 바뀌는시간(생략가능)
    slidesToShow: 7, // 보여질슬라이드수(생략가능)
    slidesToScroll: 1, // 이동슬라이드수(생략가능)
    pauseOnHover: true, // 마우스오버시 멈춤여부(생략가능)
    cssEase: 'linear', // 속도함수(생략가능)
    arrows: false, // 좌우화살표 사용여부(생략가능)
    prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
})

// 정보보기 클릭 시
$('.viewInfo').on('click', function () {
    var span = $('#section #article1 .left .depth1 .depth2 span')
    var p = $('#section #article1 .left .depth1 p')
    span.addClass('on')
    p.addClass('on')
    $('.viewInfo').remove()
})

// 데이터픽커
$('.datePicker').datepicker({
    dateFormat: 'yy-mm-dd',
    changeMonth: true,
    changeYear: true,
    yearRange: '1900:2021'
})

// 네비게이션 호버 시 슬라이드업,다운 + 불들어오게하기
$('#nav .depth2 > ul > li').hover(
    function(){
        $(this).find('.depth3').stop().slideDown(300)
        if( !$(this).hasClass('on') ) {
            $(this).addClass('on').siblings().removeClass('on')
        }
    },
    function(){
        $(this).find('.depth3').stop().slideUp(300)
        if( $(this).hasClass('on') ) {
            $(this).removeClass('on')
        }
    }
)

// 탑버튼 애니메이션
$('.topBtn').on('click', function(e){
    e.preventDefault()
    var sct = $(window).scrollTop()
    if (sct===0) {
         return false
    } else {
        $('html').animate({
            scrollTop:0
        }, 500)
    }    
})

// 탑버튼 제어
$(window).on('scroll', function(){
    var sct = $(this).scrollTop()
    if (sct>=1 && !$('.topBtn').hasClass('on')) {
        $('.topBtn').addClass('on')
    } else if (sct<1 && $('.topBtn').hasClass('on')) {
        $('.topBtn').removeClass('on')
    }
})

// 더보기 버튼 제어
$('.modalOpen').on('click', function(e){
    e.preventDefault()
    $('#modal').addClass('on')
})
$('.modalClose').on('click', function(e){
    e.preventDefault()
    $('#modal').removeClass('on')
})

// 상단 버튼 제어
$('.leftBtn').on('click', function(){
    $('#article2 .right .depth1').addClass('on')
    $('#article2 .right .depth2').removeClass('on')
})
$('.rightBtn').on('click', function(){
    $('#article2 .right .depth1').removeClass('on')
    $('#article2 .right .depth2').addClass('on')
})