// 百度地图API功能
var map = new BMap.Map("map");
map.enableScrollWheelZoom(true);
var point = new BMap.Point(114.056205, 22.682367);
var marker = new BMap.Marker(point);  // 创建标注
map.addOverlay(marker);              // 将标注添加到地图中
map.centerAndZoom(point, 15);
var opts = {
    width: 200,     // 信息窗口宽度
    height: 100,     // 信息窗口高度
    title:"深圳市迈濠科技有限公司",
    enableMessage: true,//设置允许信息窗发送短息
}
var infoWindow = new BMap.InfoWindow("地址：广东省-深圳市-光明区-金谷动力科技园12-1栋301室", opts);  // 创建信息窗口对象 
marker.addEventListener("click", function () {
    map.openInfoWindow(infoWindow, point); //开启信息窗口
});
map.centerAndZoom(point, 15);
map.panTo(point);