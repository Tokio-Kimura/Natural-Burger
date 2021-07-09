//--------------------header--------------------
var beforePos = 0; //スクロールの値の比較用の設定

//スクロール途中でヘッダーが消え、上にスクロールすると復活する設定を関数にまとめる
function ScrollAnime() {
    var elemTop = $('#top_view').offset().top; //この位置まできたら
    var scroll = $(window).scrollTop();
    //ヘッダーの出し入れをする
    if (scroll == beforePos) {
        //IE11対策で処理を入れない
    } else if (elemTop > scroll || 0 > scroll - beforePos) {
        //ヘッダーが下から出現する
        $('#header').removeClass('DownMove'); //#headerにUpMoveというクラス名を除き
        $('#header').addClass('UpMove'); //#headerにDownMoveのクラス名を追加
    } else {
        //ヘッダーが下に消える
        $('#header').removeClass('UpMove'); //#headerにDownMoveというクラス名を除き
        $('#header').addClass('DownMove'); //#headerにUpMoveのクラス名を追加
    }

    beforePos = scroll; //現在のスクロール値を比較用のbeforePosに格納
}


// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    ScrollAnime(); //スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    ScrollAnime(); //スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});

//--------------------nav--------------------

$(".openbtn").click(function () {
    $(this).toggleClass('active');
    $("#g-nav").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive'); //丸背景にcircleactiveクラスを付与
});

$("#g-nav a").click(function () { //ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active'); //ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive'); //ナビゲーションのpanelactiveクラスを除去
    $(".circle-bg").removeClass('circleactive'); //丸背景のcircleactiveクラスを除去
});

//--------------------news--------------------

$('.news_slider').bxSlider({
    touchEnabled: false, //リンクを有効にするためスライドをマウスでドラッグした際にスライドの切り替えを可能にする機能を無効化
    mode: 'vertical',
    controls: false,
    auto: 'true',
    pager: false
});

//--------------------top--------------------

$('.slider').slick({
    autoplay: true, //自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000, //次のスライドに切り替わる待ち時間
    speed: 1000, //スライドの動きのスピード。初期値は300。
    infinite: true, //スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1, //スライドを画面に3枚見せる
    slidesToScroll: 1, //1回のスクロールで3枚の写真を移動して見せる
    arrows: true, //左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
    dots: true, //下部ドットナビゲーションの表示
    pauseOnFocus: false, //フォーカスで一時停止を無効
    pauseOnHover: false, //マウスホバーで一時停止を無効
    pauseOnDotsHover: false, //ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function (event, slick, currentSlide, nextSlide) {
    $('.slider').slick('slickPlay');
});

//--------------------about--------------------

// blurTriggerにblurというクラス名を付ける定義

function BlurTextAnimeControl() {
    $('.blurTrigger').each(function () { //blurTriggerというクラス名が
        var elemPos = $(this).offset().top - 50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('blur'); // 画面内に入ったらblurというクラス名を追記
        } else {
            $(this).removeClass('blur'); // 画面外に出たらblurというクラス名を外す
        }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    BlurTextAnimeControl(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    BlurTextAnimeControl(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述

//--------------------menu--------------------
function fadeAnime() {

    //ふわっと動くきっかけのクラス名と動きのクラス名の設定
    $('.fadeInUpTrigger').each(function () { //fadeInUpTriggerというクラス名が
        var elemPos = $(this).offset().top - 50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp');
            // 画面内に入ったらfadeInというクラス名を追記
        } else {
            $(this).removeClass('fadeUp');
            // 画面外に出たらfadeInというクラス名を外す
        }
    });


} //ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    fadeAnime(); /* アニメーション用の関数を呼ぶ*/
}); // ここまで画面が読み込まれたらすぐに動かしたい場合の記述

//--------------------menu,tab--------------------
//任意のタブにURLからリンクするための設定
function GethashID(hashIDName) {
    if (hashIDName) {
        //タブ設定
        $('.tab li').find('a').each(function () { //タブ内のaタグ全てを取得
            var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得
            if (idName == hashIDName) {
                var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
                $('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
                $(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
                //表示させるエリア設定
                $(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
                $(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加
            }
        });
    }
}

//タブをクリックしたら
$('.tab a').on('click', function () {
    var idName = $(this).attr('href'); //タブ内のリンク名を取得
    GethashID(idName); //設定したタブの読み込みと
    return false; //aタグを無効にする
});


// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function () {
    $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
    $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
    var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
    GethashID(hashName); //設定したタブの読み込み
});
