
$('.bilding-main-wrapper__block').click(function(){
    $('.bilding-main-wrapper').addClass('bilding-main-wrapper-scroll')
})

$('.btn-clid2').on('click', function(){
    $('.advantages-clid-7-wrap').toggleClass('active')
    $('#advantagesBackBtn12').click(function(){
        $('.advantages-clid-7-wrap').removeClass('active')
    
    })
})
function hoverElem(el1, el2){
    el1.mouseenter(
        function(){
            el2.css('opacity', '1');

            // $('.bilding-main-wrapper__block').css('width', '329px')
            if($(this).attr('id') == 'bilding-main-1'){
                // $('.bilding-main-wrapper__2').css('left', '497px')
                // $('.bilding-main-wrapper__3').css('right', '346px')
            }else if($(this).attr('id') == 'bilding-main-4'){
                    // $('.bilding-main-wrapper__2').css('left', '346px ')
                    // $('.bilding-main-wrapper__3').css('right', '497px')                    
            }
            else if($(this).attr('id') == 'bilding-main-2'){
                // $('.bilding-main-wrapper__2').css('left', '351px ')
                // $('.bilding-main-wrapper__3').css('right', '346px')                   
            }
            else if($(this).attr('id') == 'bilding-main-3'){
                // $('.bilding-main-wrapper__2').css('left', '346px ')
                // $('.bilding-main-wrapper__3').css('right', '351px')                   
            } 
            // $(this).css('width', '472px')
        }
    )
    el1.mouseleave(
        function(){
            el2.css('opacity', '0');
            // $('.bilding-main-wrapper__block').css('width', '364px')
            // $('.bilding-main-wrapper__2').css('left', '384px')
            // $('.bilding-main-wrapper__3').css('right', '384px')
        }
    )   
    
    $(this).click(function(){
      el1.off( "mouseenter mouseleave")        
    })
    
}
$('.mobile-burger').click(function(){
    $('.mobule-burder-menu').toggleClass('active')
})
for(let i = 0;i <= 4;i++ ){
    hoverElem($('#bilding-main-'+[i]),  $('.section-price-'+[i]))
    $('.number-price__back-2').click(function(){
        $('.section-price-'+[i]).css('opacity', '0');
    })
    
    $('.number-price__back').addClass('number-price__back-2');
        $('#bilding-main-'+[i]).click(function(){
            $('.section-price').removeClass('normal')
            $('.section-price').addClass('flat')
            $('.quantity-number-main').text('2');
            $(this).addClass('top-1');
            
            // $(this).children('.bilding-main-wrapper__block__text').addClass('active-flat')
            $('#object').css('opacity', '1')
            $('#object').text($(this).children('.bilding-main-wrapper__block__text').text())

            if($(this).attr('id') == 'bilding-main-1'){
                $('#bilding-main-2').addClass('top-2');
                $('#bilding-main-3').addClass('top-3');
                $('#bilding-main-4').addClass('top-4');
                $('.section-price').addClass('houm')
                clickBackBtn($('.number-price__back-2'))
            }else if($(this).attr('id') == 'bilding-main-2'){
                    $('#bilding-main-1').addClass('top-2');
                    $('#bilding-main-3').addClass('top-3');
                    $('#bilding-main-4').addClass('top-4');    
                    clickBackBtn($('.number-price__back-2'))            
            }else if($(this).attr('id') == 'bilding-main-3'){
                $('#bilding-main-1').addClass('top-2');
                $('#bilding-main-2').addClass('top-3');
                $('#bilding-main-4').addClass('top-4');
                clickBackBtn($('.number-price__back-2'))   
            }else if($(this).attr('id') == 'bilding-main-4'){
                $('#bilding-main-1').addClass('top-2');
                $('#bilding-main-2').addClass('top-3');
                $('#bilding-main-3').addClass('top-4');
                clickBackBtn($('.number-price__back-2'))   
            }
    function clickBackBtn(back){
                back.click(function(event){
                event.preventDefault()
                // $('#bilding-main-1').removeClass('top-1');
                // $('#bilding-main-2').removeClass('top-2');
                // $('#bilding-main-3').removeClass('top-3');
                // $('#bilding-main-4').removeClass('top-4');
                statickFunsioon()
            })
        }
    })    
    // function clickBackBtn2(back){
    //     back.click(function(event){
    //     event.preventDefault()
    //     $('#bilding-main-1').removeClass('top-2');
    //     $('#bilding-main-2').removeClass('top-1');
    //     $('#bilding-main-3').removeClass('top-1');
    //     $('#bilding-main-4').removeClass('top-4');
    
    //     statickFunsioon()
    // })
    // }
    // function clickBackBtn3(back){
    //     back.click(function(event){
    //     event.preventDefault()
    //     $('#bilding-main-1').removeClass('top-2');
    //     $('#bilding-main-2').removeClass('top-3');
    //     $('#bilding-main-3').removeClass('top-1');
    //     $('#bilding-main-4').removeClass('top-4');
    
    //     statickFunsioon()
    // })
    // }
    // function clickBackBtn4(back){
    //     back.click(function(event){
    //     event.preventDefault()
    //     $('#bilding-main-1').removeClass('top-2');
    //     $('#bilding-main-2').removeClass('top-3');
    //     $('#bilding-main-3').removeClass('top-4');
    //     $('#bilding-main-4').removeClass('top-1');
    //     statickFunsioon()
    // })
    // }
    function statickFunsioon(){

        window.location.reload();
        // $('.section-price').addClass('normal')
        // $('.section-price').removeClass('flat')
        // $('.section-price').removeClass('houm')
        // $('.bilding-main-wrapper__block').css('width', '364px')
        // $('.bilding-main-wrapper__2').css('left', '384px')
        // $('.bilding-main-wrapper__3').css('right', '384px')
        // // $('.bilding-main-wrapper__block__text').removeClass('active-flat')

        // // Если нажали на кнопку назад скрывается
        // $('.result-click').css('opacity', '0')
        // $('#object').text($(this).children('.bilding-main-wrapper__block__text').text(""))
        // $('#back-btn').removeClass('number-price__back-2')
    
        // hoverElem($('#bilding-main-'+[i]),  $('.section-price-'+[i]))
        // $('.quantity-number-main').text('1');
        
    }
}
$(document).ready(function(){
    $('.slider-wrapper').slick({
        infinite: false,
        speed: 800,
        variableWidth: true
    })
    $('.stages-slider').slick({
        speed: 600,
    })
    $('.person-slider').slick({
        infinite: false,
        speed: 800,
        variableWidth: true
    })
})


function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');
    
    for (let elm of elements) {
        observer.observe(elm);
  }



//   Ответ на вопрос "Количество помещений"
  $('.quis-animate').on('click', function(){


    // Добавить новый класс для обшего контейнера и скрыть вопрос
    $('.numder-price__text2').addClass('hidde')
    $('#sectionPrice').addClass('square')
    // скрыть старые блоки
    $('.quis-animate').css('opacity', '0')

    // $(this).css('display', 'block')
    // $(this).addClass('active')
    // $(this).css('opacity', '1')

    // элементы которые были выбраны
        $('#room').css('opacity', '1')
        $('#room').text($(this).text())
        $('.quantity-number-main').text('3');
  })



//   Вернутся назад с 3тего вопроса на вотрой
  $('.number-price__back-3').on('click', function(){
    window.location.reload();
    // $('.quantity-number-main').text('2');
  })


  //   Ответ на вопрос "Какая площадь объекта"
  $('.quis-animate2').on('click', function(){
    $('#sectionPrice').addClass('paul')
    $('#squares').css('opacity', '1')
    $('.quis-wrapper1').hide()
    $('#squares').text($(this).text())
    $('#sectionPrice').removeClass('square')
    $('.quantity-number-main').text('4');
    $('.numder-price__text2').hide()

  })

  //   Ответ на вопрос "Есть ли стяжка на полу?"
  $('.quis-animate3').on('click', function(){
    $('#sectionPrice').removeClass('paul')
    $('#sectionPrice').addClass('walls')
    $('#paul').css('opacity', '1')

    if($(this).text() == 'Да'){
        $('#paul').text('Есть стяжка')
    }else{
        $('#paul').text('Стяжки нет')
    }
    $('.quantity-number-main').text('5');
  })

    //   Ответ на вопрос "Укажите материал стен:"
    $('.quis-animate4').on('click', function(){
        $('#walls').css('opacity', '1')
        $('#walls').text($(this).text())

        $('.top-1').css('cssText', 'left: 1095px !important;')
        $('.top-1').css('top', '39px')
        $('#sectionPrice').removeClass('walls')
        for(let i = 2;i <= 4;i++ ){
            $('.top-'+[i]).hide()
        }
        $('.top-1').children('.bilding-main-wrapper__block__img').children('img').css('opacity','0.2')
        $('.data-click-wrapper').css('left', '1129px')
        $('#sectionPrice').addClass('question')
      })

      $('#form-price').hide()

    // Клик по выбранным соц сетям 

        $('.btn-message').on('click', function(){
            $('.section-price').removeClass('square')
            $('#sectionPrice').removeClass('question')
            $('.price-block-content__text').fadeOut(600)
            $('.quis-wrapper').fadeOut(300)
            $('.top-1').fadeOut(600)
            $('.messanger-wrap').fadeOut(600)
            $('.data-click-wrapper').fadeOut(600)
            $('#form-price').fadeIn(1500)
        })        
    


    //   Клик по кнопке узнать стоимость

    $('#priceBtn').on('click', function(){
        $('#form-price').fadeOut(300)
        $('.success-block-wrapper').fadeIn(700)
    })

$('.advantages-block__content__btn-wrap').on('click', function(){
        $('.content-sv').removeClass('adaptiv')
        $('.serisec-block__wrap').width('auto')
        $('.content-sv').width('399px')
        $('.content-sv__wr').width('304px')
        $('.advantages-block-3').css('left','-720px')
        $('.btn-clid').show(500)

        $('.content-sv__wr').removeClass('hide')

        $('.list-desc-wr').css('cssText', '')
        $('.serisec-block').css('cssText', 'height: none; width: none;')
        $('.content-sv__text-blok__desck-b__animate').css('cssText', 'margin-top: 0px; transition: all 0.2s ease 0s; position: inherit;')
        $('.content-sv').css('border', '3px solid #00000000')
        $('.content-sv').css('padding', '0px 43px')
        
})
$('.btn-clid').mouseenter(
    function(){
        $('.btn-clid').on('click', function(){
            $(this).parents('.serisec-block').width('auto')
            $(this).parents('.serisec-block__wrap').width('auto')
            $(this).parents('.content-sv').width('1220px')
            $(this).parents('.content-sv').addClass('adaptiv')
            $(this).parents('.content-sv__wr').width('291px')
            $(this).parents('.content-sv').find('.advantages-block-3').css('left','0px')
            $(this).parents('.serisec-block:last-child').height('auto');
            $(this).hide(500)
            $(this).parents('.content-sv__wr').addClass('hide')
            


            $(this).parents('.content-sv__text-blok__desck-bl').find('.content-sv__text-blok__desck-b__animate').css('cssText', 'margin-top: -100px; transition: all 0.2s ease 0s; position: absolute;')
            $(this).parents('.list-desc-wr').css('cssText', 'position: relative; top: 0px; opacity: 1;')
            $(this).parents('.serisec-block').css('height', 'auto')
            $(this).parents('.content-sv').css('border', '3px solid #FDD913')
            $(this).parents('.content-sv').css('padding', '28px 45px 17px 45px')
            
        })
    }
    
)


        




$('.item-block-2').mouseenter(
    function(){
        $('.stages-clid-grid-item1').css('grid-template-columns', '244px 460px 244px')
    }

)
$('.item-block-2').mouseleave(
    function(){
    $('.stages-clid-grid-item1').css('grid-template-columns', '460px 244px 244px')
    }
)
$('.item-block-6').mouseenter(
    function(){
        $('.stages-clid-grid-item1').css('grid-template-columns', '244px 244px 460px')
    }

)
$('.item-block-6').mouseleave(
    function(){
    $('.stages-clid-grid-item1').css('grid-template-columns', '460px 244px 244px')
    }
)
$('.item-block-3').on('click', function(){
    let clickElem = $(this)
    clickElem.addClass('click')

    setTimeout(function(){
        clickElem.removeClass('click')
        $('.advantages-clid-2-wrap').toggleClass('active')
    }, 400);

    
    $('#advantagesBackBtn').click(function(){
        $('.advantages-clid-2-wrap').removeClass('active')
    })

})
$('.designing-btn').click(function(e){
    e.preventDefault()
    $('.advantages-clid-3-wrap').addClass('active')
    $('#designingBackBtn').click(function(){
        $('.advantages-clid-3-wrap').removeClass('active')
    })
})









