
$(document).ready(function () {
    // Handler for .ready() called.
    $(document).pjax('a', '.fjax_input', { fragment: '.fjax_input' }); //pjax 替換 class .fjax_input，只取input的.fjax_input
    $(document).ajaxStart(function () { //開始進行ajax時 上進度條
      NProgress.start();
    });
    $(document).ajaxStop(function () { //ajax結束時 70%進度條
      NProgress.set(0.7);
    });
    $(document).on('pjax:success', function () { //pjax完成替換
      let imgCount = $(".fjax_input img").length;
      let imgLoaded = 0;
      if (imgCount == 0) { //如果內部沒有img標籤
        setTimeout(function () { NProgress.done(); }, 100) //延遲100毫秒結束進度條 (直接結束會失敗))
      } else { //有img
        $("img").on("load", function () { //img 完成讀取後 
          imgLoaded += 1; //回傳計數
          if (imgLoaded == imgCount) {//計數等於總數時

            NProgress.done(); //關閉計數器
          }
        });

      }
    });
  });