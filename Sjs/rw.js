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
    r _hmt = _hmt || [];
    var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
    document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Face49a174037caa464f7aaefd5bb75f4' type='text/javascript'%3E%3C/script%3E"));