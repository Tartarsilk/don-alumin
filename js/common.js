(function ($) {
    $(window).on('load', function () {


        /* ************************** */
        /* Вторая версия отслеживания */
        /* ************************** */

        var block_show = null;

        function scrollTracking(){
            var wt = $(window).scrollTop(); /*Получает значение отступа прокрутки сверху для первого элемента в наборе.*/
            var wh = $(window).height(); /*Получает высоту элемента. */
            var et = $('.parallax-1, .parallax-2').offset().top; /*Метод позволяет получить текущее положение элемента относительно документа сверху. */
            var etp = $('.parallax-1, .parallax-2').parent().offset().top; /*Метод позволяет получить текущее положение элемента относительно родителя сверху. */
            var eh = $('.parallax-1, .parallax-2').outerHeight(); /*Высота элемента с учетом внутренних отступов, border-width и (опционально) внешних отступов (margin).  */

            if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){  /* */
                if (block_show == null || block_show == false) {
                    $('#console').html('Блок active в области видимости');

                    $(window).bind('scroll',function(e){
                        parallaxScroll();
                    });
        
                    function parallaxScroll(){
                        var scrolled = $(window).scrollTop();

                        if ($(document).width() > 1000) {
                            $('.parallax-1').css('top',((et - etp)*5 + (scrolled*.2))+'px');
                        } else {
                            if ($(document).width() > 900) {
                                $('.parallax-1').css('top',((et - etp)*5 + (scrolled*.21))+'px');
                            } else {
                            if ($(document).width() > 720) {
                                $('.parallax-1').css('top',((et - etp)*5 + (scrolled*.2))+'px');
                            } else {
                                if ($(document).width() > 500) {
                                    $('.parallax-1').css('top',((et - etp)*4.1 + (scrolled*.09))+'px');
                                } else {
                                    if ($(document).width() > 400) {
                                        $('.parallax-1').css('top',((et - etp)*4 + (scrolled*.09))+'px');
                                    } else {
                                        if ($(document).width() > 350) {
                                            $('.parallax-1').css('top',((et - etp)*3.6 + (scrolled*.08))+'px');
                                        } else {
                                            if ($(document).width() > 300) {
                                                $('.parallax-1').css('top',((et - etp)*3.2 + (scrolled*.07))+'px');
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                    }
                }
                block_show = true;
            } else {
                // if (block_show == null || block_show == true) {
                //     $('#console').html('Блок active скрыт');
                // }
                // block_show = false;
            }
        }

        $(window).scroll(function(){
            scrollTracking();
        });
            
        $(document).ready(function(){ 
            scrollTracking();
        });

        
    });
})(jQuery);
