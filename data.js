// 导航站点设置
var Config = getMStr(function(){
    var sites;
/*
常用
	公司ERP系统，http://erp.kqgeo.com:809/cops/home/index.jsp?11921，img/公司erp.png
	gitee码云，http://gitee.com/，img/gitee.png
	CSDN，https://ask.csdn.net/，img/logo.jpg
	GitHub，https://github.com/，img/GitHub.jfif
	我的博客，https://xiashuo.github.io/myblog，img/logo.jpg
	备忘录, https://xiashuo.github.io/mytab/memo.html, img/logo.jpg
	
资源下载
	ZD423下载，http://www.zdfans.com/，img/微档下载.png
	城通网盘,  https://www.xxurls.com/，img/城通网盘.jpg
	吾爱破解，https://www.52pojie.cn/，img/吾爱破解.jfif
	MSDN，https://msdn.itellyou.cn/，img/MSDN.jfif
	蓝菊花搜索，http://www.lanjuhua.com/，img/蓝菊花.png
	Tshared,http://bais.com.cn/，img/logo.jpg
	
在线视频
	疯狂影视，http://ifkdy.com/，img/logo.jpg
	
bt资源
	磁力熊，https://www.cilixiong.com/，img/bt熊.png
	比特大熊，https://www.btdx8.com/，img/logo.jpg
	资源导航，https://iao.su/909/, img/logo.jpg
	bt蛋蛋，https://www.btdandan555.com/， img/logo.jpg
	838888, https://www.868888.net/, img/logo.jpg

阅读
	知乎，https://www.zhihu.com/，img/知乎.png
	微博，https://www.weibo.com/，img/weibo.png


*/
});

// 搜索引擎设置
$(document).ready(function(){

	$('#Searchtype ul li a').on('click', function(){
		$(this).parent().addClass('active').siblings().removeClass('active');
		$('#Searchbox').submit();
	});
	
	$('#Searchbox').submit(function() {
		var type = $('#Searchtype li.active a').attr('lang');
		var que = $('input[name="wd"]').val();
		if(que !== '') {
			switch (type) {
				case 'google':
					searchstr='https://www.google.com/search?safe=strict&sxsrf=ALeKk01ipw6Ga-WEKe5rLYuqTDEwZN1Gzw%3A1582254194452&ei=ckhPXpygG8SEytMP84yuiAo&q=' + que;
					break;
				case 'baidu':
					searchstr='http://www.baidu.com/s?wd=' + que;
					break;
				case 'googlexueshu':
					searchstr='https://scholar.google.com/scholar?q=' + que;
					break;
				case 'baiduxueshu':
					searchstr='http://xueshu.baidu.com/s?wd=' + que;
					break;
				case 'baidubaike':
					searchstr='http://baike.baidu.com/item/' + que;
					break;
				case 'transaction':
					searchstr='https://translate.google.cn/#en/zh-CN/' + que;
					break;
				case 'music':
					searchstr='http://music.baidu.com/search?key=' + que;
					break;
				case 'YTB':
					searchstr='https://www.youtube.com/results?search_query=' + que;
					break;
				case 'shop':
					searchstr='http://s.taobao.com/search?q=' + que;
					break;
				case 'map':
					searchstr='http://map.baidu.com/';
					break;
				case 'kafan':
					searchstr='http://bds.kafan.cn/cse/search?q=' + que +'&s=15563968344970452529';
					break;
				case 'wiki':
					searchstr='https://zh.wikipedia.org/zh-cn/' + que;
					break;
				default:
			}
		
			if(isNewTab){
				window.open(searchstr);
				$('input[name="wd"]').val("");
			} 
			else {
				window.location.href = searchstr;
			}
			
			return false;
		}
	});
});

// 从函数中获取多行注释的字符串
function getMStr(fn) {
    var fnSource = fn.toString();
    var ret = {};
    fnSource = fnSource.replace(/^[^{]+/, '');
    // console.log(fnSource);
    var matched;
    var reg = /var\s+([$\w]+)[\s\S]*?\/\*([\s\S]+?)\*\//g;
    while (matched = reg.exec(fnSource)) {
        // console.log(matched);
        ret[matched[1]] = matched[2];
    };
    
    return ret;
}
