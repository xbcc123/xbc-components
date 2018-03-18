(function (doc, win) {
  //orientationchange : 判断手机是水平方向还是垂直方向，感应方向

  //doc ==》 document对象
  //doc.documentElement ==> 得到文档的根元素-->  <html>
  //之所以要得到文档的根元素，是为了计算网页所打开时屏幕的真实宽度
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      //获取不同移动端设备上的宽度
      if (!clientWidth) return;
      
      docEl.style.fontSize = (clientWidth / 7.5) + 'px';
      //设置根元素font-size
    };
  
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
  document.body.addEventListener('touchstart', function () { });  
//	window.onload=function(){  
//	    function stopScrolling( touchEvent ) {   
//	        touchEvent.preventDefault();   
//	    }  
//	    document.addEventListener( 'touchstart' , stopScrolling , false );  
//	    document.addEventListener( 'touchmove' , stopScrolling , false );  
//	};

  //当dom加载完成时，或者 屏幕垂直、水平方向有改变进行html的根元素计算
})(document, window);

//如果你不想进行一个响应式设计的开发，你可以直接把font-size写死

