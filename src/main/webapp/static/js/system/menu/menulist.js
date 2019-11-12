var pageii = null;
var grid = null;
$(function() {
	grid = lyGrid({
		id : 'paging',
		l_column : [ {
			colkey:"menuname",
			name:"菜单名称"
		},{
			colkey:"url",
			name:"访问路径"
		} ,{
			colkey:"icon",
			name:"图标"
		} ,{
			colkey:"isshow",
			name:"是否展开"
		},{
			colkey:"descarption",
			name:"描述"
		},{
			name:"操作"
		}],
		jsonUrl : basePath+"/menu/list.shtml",
		dymCol:true,
		checkbox : true
	});
	$("#insert").click(function() {
		var iframeWin;// 打开的窗体
		var index = layer.open({
			type : 2,
			skin : 'layui-layer-lan',
			area : [ '511px', '444px' ],
			title : '添加',
			content : basePath + '/menu/insertui.shtml',
			shade : 0,
			btn : [ "保存", "取消" ],
			success : function(layero, index) {
				iframeWin = window[layero.find('iframe')[0]['name']];
			},
			yes : function() {
				iframeWin.save();
				grid.loadData();
			}
		});
	});
	
});
