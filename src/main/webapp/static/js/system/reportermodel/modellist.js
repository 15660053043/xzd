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
			colkey : "modelname",
			name : "附加信息名称"
		}, {
			colkey : "fieldname",
			name : "字段名"
		}, {
			colkey : "modelType",
			name : "附加信息类型",
			renderData : function(rowindex, data, rowdata, colkey)// 渲染数据
			{
				return data.typename;
			}
		},{
			colkey : "options",
			name : "选项"
		}, {
			colkey : "reg",
			name : "正则表达式"
		}, {
			colkey : "tip",
			name : "提示信息"
		}, {
			colkey : "isshow",
			name : "是否在列表中显示"
		},{
			name : "操作"
		}],
		jsonUrl : basePath + "/reportermodel/list.shtml",
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
			content : basePath + '/reportermodel/insertui.shtml',
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
			content : basePath + '/reportermodel/updateui.shtml?id='+id,
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
			url : basePath + "/reportermodel/delete.shtml",
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
	$("select").change(function(){
		 if ($(this).val()==2||$(this).val()==3) {
			 $("[name='options']").attr("disabled",false);
		}else{
			 $("[name='options']").attr("disabled",true);
		}
	});
});
