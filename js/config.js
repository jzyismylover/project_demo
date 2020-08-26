var config = (function($) {
	$.pathConfig = {
		// 后台请求地址
		path: 'http://129.204.132.48:8080/laboratory/api',
		// 管理页面地址
		adminPath:'http://129.204.132.48/lab_admin/'
	}
	return $;
})(window.config || {});