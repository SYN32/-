var value = document.getElementsByClassName('sousuo');
 var btn = document.getElementsByTagName('input');	
 btn.onclick = function() {
 	value.style.display = "none";
 }
 /////////////创建轮播///////////

  // var arr = [{
  //       title:"首页",
  //       img:"../img2/lun1.png",
  //       style:'梦幻动物园'
  //   },{
  //       title:"标题2",
  //       img:"../img2/lun2.png",
  //       style:'类别2'
  //   },{
  //       title:"标题3",
  //       img:"../img2/lun3.png",
  //       style:'类别3'
  //   },{
  //       title:"标题3",
  //       img:"../img2/lun4.png",
  //       style:'类别3'
  //   },{
  //       title:"标题3",
  //       img:"../img2/lun5.png",
  //       style:'类别3'
  //   },{
  //       title:"标题3",
  //       img:"../img2/lun6.png",
  //       style:'类别3'
  //   },{
  //       title:"标题3",
  //       img:"../img2/lun7.png",
  //       style:'类别3'
  //   },{
  //       title:"标题3",
  //       img:"../img2/lun8.png",
  //       style:'类别3'
  //   },{
  //       title:"标题3",
  //       img:"../img2/lun1.png",
  //       style:'类别3'
  //   }];

  //   function begin(arr) {
  //       arr.push(arr[0]);
  //       arr.unshift(arr[arr.length - 2]);

  //       var wrap = $("<div/>");
  //       wrap.addClass("wrap");
  //       var body = $('body');
  //       body.append(wrap);

  //       var ul = $('<ul/>');
  //       ul.css({
  //           width:wrap.width() * arr.length + 'px'
  //       })
  //       wrap.append(ul);
  //       for (var i = 0; i < arr.length; i++) {
  //           var li = $("<li/>");
  //           var img = $("<img/>")
  //           img[0].src = arr[i].img;
  //           img.css({
  //             width:"800px",
  //             height:"400px",
  //             position:"absolute",
  //            // left:"500px",
  //            // top:""
          
  //           })
  //           li.append(img);
  //           li.css({
  //               width:wrap.width(),
  //               height:wrap.height()
  //           })
  //           // li.text(arr[i].title);
  //           ul.append(li);
  //       }
  //       ul.css({
  //           left:-wrap.width() + 'px'
  //       })

        
  //       return wrap;
  //   }

  //   function move(wrap) {
  //       // 让ul移动
  //       var off = wrap.children().position().left;
  //       var timer = setInterval(function () {
  //           off -= wrap.width();
  //           wrap.children().animate({
  //                left:off
  //           }, 2000,function () {
  //               if(off == -(wrap.children().width() - wrap.width())){
  //                   wrap.children().css("left",-wrap.width());
  //                   off = -wrap.width();
  //               }
  //           });
  //       },3000);
  //   }
  //   var a = begin(arr);
  //   move(a);

    ////////////////////创建链接///////////////////////////
      var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-23026692-1']);
    _gaq.push(['_setDomainName', '.lekan.com']);
    _gaq.push(['_setAllowHash', false]);
    if(location.href.indexOf("404") >=0){
        _gaq.push(['_trackPageview', '/404.html?page=' + document.location.pathname + document.location.search + '&from=' + document.referrer]);
    }
    _gaq.push(['_setCustomVar', 1, 'Uer Type', 'visitor', 2]);
    _gaq.push(['_trackPageview']);
    (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        //ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

//////////////////////////借鉴创建网络请求////////////////////////////////////////////
    var _hmt = _hmt || [];
    var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
    document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Face49a174037caa464f7aaefd5bb75f4' type='text/javascript'%3E%3C/script%3E"));