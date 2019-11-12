var pageii = null;
var grid = null;
$(function() {
	grid = lyGrid({
		id : 'paging',
		l_column : [ {
			colkey:"username",
			name:"通讯员用户名"
		},{
			colkey:"createtime",
			name:"创建时间"
		} ,{
			colkey:"state",
			name:"状态"
		} ,{
			colkey:"realname",
			name:"真实姓名"
		} ,{
			colkey:"phonenumber",
			name:"手机号"
		} ,{
			colkey:"province",
			name:"省份"
		} ,{
			colkey:"city",
			name:"市"
		} ,{
			colkey:"county",
			name:"区"
		} ,{
			colkey:"area",
			name:"详细地址"
		},{
			colkey:"islock",
			name:"锁定"
		},{
			name:"操作"
		}],
		jsonUrl : basePath+"/reporter/list.shtml",
		dymCol:true,
		checkbox : true
	});
	
	$("#insert").click(function() {
		// layer.alert('见到你真的很高兴', {icon: 6,skin:'layui-layer-lan',shade:0});
		var iframeWin;// 打开的窗体
		var index = layer.open({
			type : 2,
			skin : 'layui-layer-lan',
			area : [ '511px', '444px' ],
			title : '添加',
			content : basePath + '/reporter/insertui.shtml',
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
	$("#update").click(function() {
		var id=grid.getSelectedCheckbox()[0];
		var iframeWin;// 打开的窗体
		var index = layer.open({
			type : 2,
			skin : 'layui-layer-lan',
			area : [ '511px', '444px' ],
			title : '修改',
			content : basePath + '/reporter/updateui.shtml?id='+id,
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
