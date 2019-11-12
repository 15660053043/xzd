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
			name : "公告标题"
		},{
			colkey : "createtime",
			name : "创建时间"
		}, {
			colkey : "publishtime",
			name : "发布时间"
		}, {
			colkey : "user",
			name : "创建人",
			renderData : function(rowindex, data, rowdata, colkey){
				return data.realname;
			}
		}, {
			colkey : "state",
			name : "发布状态",
			renderData : function(rowindex, data, rowdata, colkey){
				if(data==0){
					return "已发布";
				}else{
					return "未发布";
				}
			}
		}, {
			colkey : "showtype",
			name : "展示状态",
			renderData : function(rowindex, data, rowdata, colkey){
				if(data == 0){
					return "以图标展示";
				}else{
					return "以窗口提示";
				}
			}
		}],
		jsonUrl : basePath + "/notice/list.shtml",
		dymCol : true,
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
			content : basePath + '/notice/insertui.shtml',
			shade : 0,
			maxmin: true,
			btn : [ "保存", "取消" ],
			success : function(layero, index) {
				iframeWin = window[layero.find('iframe')[0]['name']];
			},
			yes : function() {
				iframeWin.save();
				grid.loadData();
			}
		});
		layer.full(index);
	});
	
	$("#update").click(function(){
		var id=grid.getSelectedCheckbox()[0];
		var iframeWin;
		var index = layer.open({
			type : 2,
			skin : 'layui-layer-lan',
			area : [ '511px', '444px' ],
			title : '修改',
			content : basePath + '/notice/updateui.shtml?id='+id,
			shade : 0,
			maxmin: true,
			btn : [ "保存", "取消" ],
			success : function(layero, index) {
				iframeWin = window[layero.find('iframe')[0]['name']];
			},
			yes : function() {
				iframeWin.save();
				grid.loadData();
			}
		});
		layer.full(index);
	});
	
	$("#delete").click(function() {
		var checkRows = grid.selectRow();
		$.each(checkRows,function(i,e){
			e.user=null;
			e.noticeAttachments=null;
		});
		var index;
		$.ajax({
			type : "POST",
			url : basePath + "/notice/delete.shtml",
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
