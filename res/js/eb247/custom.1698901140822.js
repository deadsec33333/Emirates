$('.photogalleryholder').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});

$('.videogalleryholder').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});

$('.detailsgalleryholder').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

 


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("movetotop").style.display = "block";
    } else {
        document.getElementById("movetotop").style.display = "none";
    }   
}
function topFunction() {
     $('html, body').animate({scrollTop:0}, 'slow');
}

$(document).ready(function(){
  $(".menuhamburger").click(function(){
    $(this).toggleClass("is-active");
  });
  
$(".socialicon_search").click(function(){
    $(this).toggleClass("socialicon_searchclose");
  });
});

$(document).ready(function(){
    $(".dropdown").hover(function(){
        var dropdownMenu = $(this).children(".dropdown-menu");
        if(dropdownMenu.is(":visible")){
            dropdownMenu.parent().toggleClass("open");
        }
    });

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
        $(".socialdefault").addClass("social_fixed");
    } else {
        $(".socialdefault").removeClass("social_fixed");
    }
});

});  


$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

$(document).ready(function() {
    var e = $(".widget.prayer.top .timeh.fajr").text(),
        t = $(".widget.prayer.top .timeh.shorooq").text(),
        a = $(".widget.prayer.top .timeh.duhr").text(),
        i = $(".widget.prayer.top .timeh.asr").text(),
        o = $(".widget.prayer.top .timeh.magrib").text(),
        n = $(".widget.prayer.top .timeh.isha").text(),
        s = $(".widget.prayer.top .time.fajr").text(),
        r = $(".widget.prayer.top .time.shorooq").text(),
        l = $(".widget.prayer.top .time.duhr").text(),
        d = $(".widget.prayer.top .time.asr").text(),
        c = $(".widget.prayer.top .time.magrib").text(),
        h = $(".widget.prayer.top .time.isha").text(),
        u = new Date,
        m = (new Date).getFullYear(),
        f = (new Date).getMonth(),
        p = (new Date).getDate(),
        g = ((new Date).getHours(), (new Date).getMinutes(), (new Date).getSeconds(), new Date(m, f, p, s.split(":")[0], s.split(":")[1])),
        w = new Date(m, f, p, r.split(":")[0], r.split(":")[1]),
        v = new Date(m, f, p, l.split(":")[0], l.split(":")[1]),
        y = new Date(m, f, p, d.split(":")[0], d.split(":")[1]),
        b = new Date(m, f, p, c.split(":")[0], c.split(":")[1]),
        p = new Date(m, f, p, h.split(":")[0], h.split(":")[1]);
    u < g ? ($(".topbar .prayertime .prayer-nf").text(e), $(".topbar .prayertime .prayer-hours").text(s)) : u < w ? ($(".topbar .prayertime .prayer-nf").text(t), $(".topbar .prayertime .prayer-hours").text(r)) : u < v ? ($(".topbar .prayertime .prayer-nf").text(a), $(".topbar .prayertime .prayer-hours").text(l)) : u < y ? ($(".topbar .prayertime .prayer-nf").text(i), $(".topbar .prayertime .prayer-hours").text(d)) : u < b ? ($(".topbar .prayertime .prayer-nf").text(o), $(".topbar .prayertime .prayer-hours").text(c)) : u < p ? ($(".topbar .prayertime .prayer-nf").text(n), $(".topbar .prayertime .prayer-hours").text(h)) : ($(".topbar .prayertime .prayer-nf").text(e), $(".topbar .prayertime .prayer-hours").text(s))
	
	$(".topbar .weatherwidget .temp").text($(".topbar .widget.weather .max-temperature").text().replace("Max:","").trim());
	
})
