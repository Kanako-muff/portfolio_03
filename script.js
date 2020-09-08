$(function(){
  /*------------------------------------------------*/
  /*　変数定義                                       */
  /*------------------------------------------------*/
  //　画像枚数
  var count = $("#slides li").length;

  //　現在表示されている画像（最初：1番目の画像）
  var current = 1;

  //　次に表示する画像
  var next = 2;

  //　フェードイン/アウトのインターバル（ms）
  var interval = 3000;

  //　フェードイン/アウトのスピード（ms）
  var duration = 500;

  //　タイマー用の変数
  var timer;

  //　スクロールの方向（-1：前、1：次）
  var dir = -1;


  /*------------------------------------------------*/
  /*　スライド設定                                   */
  /*------------------------------------------------*/
  //　1番目の画像以外を非表示
  $("#slides li:not(:first-child)").hide();

  //　interval（3000ms）ごとにslideTimer()関数を実行
  timer = setInterval(slideTimer, interval);

  function slideTimer(){
    //　表示画像の入れ替え
    $("#slides li:nth-child(" + current + ")").fadeOut(duration);
    $("#slides li:nth-child(" + next + ")").fadeIn(duration);

    //　変数current・nextの値入れ替え
    current = next;
    next = ++next;
    if(next > count){
      next = 1;
    }

    //　targetクラスの入れ替え
    $("#dotButton li a").removeClass("target");
    $("#dotButton li:nth-child("+ current +") a").addClass("target");
  }

  //　ボタン（ドット）
  $("#dotButton li a").click(function(){
    next = $(this).html();
    clearInterval(timer); //タイマーを停止
    timer = setInterval(slideTimer, interval); //再スタート
    slideTimer(); //初回の関数実行
    return false;
  });
});
