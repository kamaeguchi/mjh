
/* Event
--------------------------- */
$(function(){
    fontRWD();
    smoothScroll();
});
    /* スムーズスクロール */
    function smoothScroll() {
      $('a[href^="#"]:not(.no-smooth)').click(function(){
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        console.log(href);
        if(!(href == '#top')){
            $('#menu-cb').click(); // 遷移後にハンバーガーメニューを閉じる
        }
        return false;
      });
    }

$(window).on('load', function(){
    $(window).scroll();
});

$(window).on('resize', function(){
    fontRWD();
}); 
    /* Font レスポンシブ */
    let breakPointPC = 1020,
        breakPointSP = 768;
    function fontRWD(){
        var ww = $(window).width(),
            par;

        if(ww <= breakPointPC){
            par = ww / (breakPointPC*0.4/50);
            $('html').css('font-size',par+'%');
            $('body')
                .addClass('is-spMode')
                .removeClass('is-pcMode');
            deviceAdjustment = 0;

        } else if(ww <= breakPointSP){
            par = ww / (breakPointSP*0.4/50);
            $('html').css('font-size',par+'%');

        } else {
            $('html').removeAttr("style");
            $('body')
                .addClass('is-pcMode')
                .removeClass('is-spMode');
            deviceAdjustment = 150;
        }
    }

$(window).scroll(function(){
    toTop();
    Parallax();
});
    /* ページトップ */
    let srlTop, winH, elemPos, scroll, footerTop, footerH;
    function toTop(){
        srlTop = $(this).scrollTop();
        winH = $(window).height();
        footerTop = $('.footer').offset().top;
        footerH = $('.footer').height();
        if(srlTop + winH > footerTop){
            $('.pageTop')
                .css('bottom', footerH);
        } else if (srlTop > 300) {
            $('.pageTop')
                .addClass('is-fadeIn')
                .removeClass('is-fadeOut')
                .removeAttr('style');
        } else {
            $('.pageTop')
                .removeClass('is-fadeIn')
                .addClass('is-fadeOut')
        }
    }

    /* パララックスアニメーション */
    let deviceAdjustment = 0;
    function Parallax(){
        srlTop = $(this).scrollTop();
        winH = $(window).height();
        $('[data-animation="fade"]').each(function(){
            elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            winH = $(window).height();
            if (scroll > elemPos - winH + deviceAdjustment){
                $(this).addClass('is-fadeIn');
            } else {
                $(this).removeClass('is-fadeIn');
            }
        });
    }

/* Instagram Feed */
/*const accessToken = '6107959417.c9c8445.38437ce644c14bb5bc81c33559410abc',    // アクセストークン
      userid = 6107959417,  // ユーザーID
      count = 9;            // 取得件数
function instaFeed(){
    $.ajax({
        url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent/?access_token=' + accessToken + '&count=' + count,
        dataType: 'jsonp',
        success: function(data) {
            var insert = '<div class="instaList">';
            for (let i = 0; i < data['data'].length; i++) { 
                // 画像とリンク先
                insert += '<div class="instaList_item"><a href="' + data['data'][i]['link'] + '" target="_blank">';
                insert += '<img src="' + data['data'][i]['images']['thumbnail']['url'] + '" />';
                insert += '</a></div>';
            };
            insert += '</div>';
            $('#instaFeed').append(insert);
        }
    });
}*/

