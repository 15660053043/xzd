var pageii = null;
var grid = null;
$(function() {
	grid = lyGrid({
		id : 'paging',
		l_column : [ {
			colkey:"rolename",
			name:"角色名称"
		},{
			colkey:"descarption",
			name:"描述"
		} ,{
			name:"操作"
		}],
		jsonUrl : basePath+"/role/list.shtml",
		dymCol:true,
		checkbox : true
	});
	
	$("#insert").click(function(){
		//layer.alert('见到你真的很高兴', {icon: 6,skin:'layui-layer-lan',shade:0});
		var iframeWin;//打开的窗体
		var index = layer.open({
			type: 2,
			skin:'layui-layer-lan',
			area: ['511px', '338px'],
			title: '添加',
			content: basePath+'/role/insertui.shtml',
			shade:0,
			btn:["保存","取消"],
			success:function(layero,index){
				iframeWin = window[layero.find('iframe')[0]['name']];
			},
			yes:function(){
				iframeWin.save();
				grid.loadData();
			}
		});
	});
	
	$("#delete").click(function(){
		var checkRows = grid.selectRow();
		alert(JSON.stringify(checkRows));
		var index;
		$.ajax({
			type:"POST",
			url:basePath+"/role/delete.shtml",
			dataType:"json",
			contentType:'application/json;charset=utf-8',
			data:JSON.stringify(checkRows),
			beforeSend:function(){
				index = layer.load(1);
			},
			success:function(data){
				layer.close(index);
				layer.msg(data.msg);
				grid.loadData();
			},
			error:function(){
				layer.close(index);
				layer.msg('链接错误');
			}
		});
	});
});
