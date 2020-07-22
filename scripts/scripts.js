$('h4').next().hide();
$('h4').click(function(){
    $(this).next().slideToggle();
    $('h4').not(this).next().stop(true,true).slideUp();
});
$('.popup .close_window, .overlay').click(function (){
    $('.popup, .overlay').css({'opacity': 0, 'visibility': 'hidden'});
    });
    $('a.open_window').click(function (e){
    $('.popup, .overlay').css({'opacity': 1, 'visibility': 'visible'});
    e.preventDefault();
});