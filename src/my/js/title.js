
  var first_title=document.title;
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {

      document.title = '╭(°A°`)╮ 页面崩溃啦 ~ 快回来看看~';

    } else {

      document.title = '(ฅ>ω<*ฅ) 噫又好了~';
      titleTime = setTimeout(function () {
        document.title = first_title;
      }, 2000);
    }
  });
