var pageii = null;
var grid = null;
$(function() {
	grid = lyGrid({
		id : 'paging',
		l_column : [ {
			colkey : "id",
			name : "id",
			hide:true
		},{
			colkey : "title",
			name : "稿件名称"
		},{
			colkey : "createtime",
			name : "创建时间"
		}, {
			colkey : "modifytime",
			name : "修改时间"
		}, {
			colkey : "articleType",
			name : "稿件类型",
			renderData : function(rowindex, data, rowdata, colkey){
				return data.typename;
			}
		}, {
			colkey : "reporter",
			name : "用户名",
			renderData : function(rowindex, data, rowdata, colkey){
				return data.realname;
			}
		}, {
			colkey : "articleState",
			name : "稿件状态",
			renderData : function(rowindex, data, rowdata, colkey){
				return data.statename;
			}
		}],
		jsonUrl : basePath + "/article/list.shtml",
		dymCol : true,
		checkbox : true,
		data:$("#form").serializeJSON()
	});
	$("#insert").click(function() {
		// layer.alert('见到你真的很高兴', {icon: 6,skin:'layui-layer-lan',shade:0});
		var iframeWin;// 打开的窗体
		var index = layer.open({
			type : 2,
			skin : 'layui-layer-lan',
			area : [ '511px', '444px' ],
			title : '添加',
			content : basePath + '/usermodel/insertui.shtml',
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
	
	$("#update").click(function(){
		var id=grid.getSelectedCheckbox()[0];
		var iframeWin;
		var index = layer.open({
			type : 2,
			skin : 'layui-layer-lan',
			area : [ '511px', '444px' ],
			title : '修改',
			content : basePath + '/usermodel/updateui.shtml?id='+id,
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
	
	$("#delete").click(function() {
		var checkRows = grid.selectRow();
		alert(JSON.stringify(checkRows));
		var index;
		$.ajax({
			type : "POST",
			url : basePath + "/usermodel/delete.shtml",
			dataType : "json",
			contentType : 'application/json;charset=utf-8',
			data : JSON.stringify(checkRows),
			beforeSend : function() {
				index = layer.load(1);
			},
			success : function(data) {
				layer.close(index);
				layer.msg(data.msg);
				grid.loadData();
			},
			error : function() {
				layer.close(index);
				layer.msg('链接错误');
			}
		});
	});
});
