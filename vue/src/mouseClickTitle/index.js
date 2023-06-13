// onload = function () {
//   var click_cnt = 0;
//   var content = ['I', 'LOVE', 'YOU', '❤'];
//   var textColor = ['red', 'green', 'white']
//   var $html = document.getElementsByTagName("html")[0];
//   var $body = document.getElementsByTagName("body")[0];
//   function getRandomInt(max) {
//     return Math.floor(Math.random() * Math.floor(max));
//   }
//   $html.onclick = function (e) {
//     var $elem = document.createElement("b");
//     $elem.style.color = "red";
//     $elem.style.fontWeight = "bold"
//     $elem.style.zIndex = 9999;
//     $elem.style.position = "absolute";
//     $elem.style.select = "none";
//     $elem.style.userSelect = "none";
//     var x = e.pageX;
//     var y = e.pageY;
//     $elem.style.left = (x - 10) + "px";
//     $elem.style.top = (y - 20) + "px";
//     clearInterval(anim);
//     if (click_cnt > content.length - 1) {
//       click_cnt = 0
//     }
//     $elem.innerText = content[click_cnt];
//     // 按序展示
//     ++click_cnt;
//     // 随机展示
//     // click_cnt = getRandomInt(content.length);
//     $elem.style.fontSize = Math.random() * 10 + 20 + "px";
//     var increase = 0;
//     var anim;
//     setTimeout(function () {
//       anim = setInterval(function () {
//         if (++increase == 150) {
//           clearInterval(anim);
//           $body.removeChild($elem);
//         }
//         $elem.style.top = y - 20 - increase + "px";
//         $elem.style.opacity = (150 - increase) / 120;
//       }, 8);
//     }, 70);
//     $body.appendChild($elem);
//   };
// };

// export default onload

export default (function () {
  var a_idx = 0;
  window.onclick = function (event) {
    var a = new Array("❤I❤", "❤LOVE❤", "❤YOU❤");

    var heart = document.createElement("b"); //创建b元素
    heart.onselectstart = new Function('event.returnValue=false'); //防止拖动

    document.body.appendChild(heart).innerHTML = a[a_idx]; //将b元素添加到页面上
    a_idx = (a_idx + 1) % a.length;
    heart.style.cssText = "position: fixed;left:-100%;"; //给p元素设置样式

    var f = 16, // 字体大小
      x = event.clientX - f / 2, // 横坐标
      y = event.clientY - f, // 纵坐标
      c = randomColor(), // 随机颜色
      a = 1, // 透明度
      s = 1.2; // 放大缩小

    var timer = setInterval(function () { //添加定时器
      if (a <= 0) {
        document.body.removeChild(heart);
        clearInterval(timer);
      } else {
        heart.style.cssText = "font-size:16px;cursor: default;position: fixed;color:" +
          c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" +
          s + ");";

        y--;
        a -= 0.016;
        s += 0.002;
      }
    }, 15)

  }
  // 随机颜色
  function randomColor() {
    return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math
      .random() * 255)) + ")";

  }
}());

