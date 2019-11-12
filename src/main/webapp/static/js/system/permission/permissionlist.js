var pageii = null;
var grid = null;
$(function() {
	grid = lyGrid({
		id : 'paging',
		l_column : [ {
			colkey:"permissionname",
			name:"角色名称"
		},{
			colkey:"descarption",
			name:"描述"
		} ,{
			name:"操作"
		}],
		jsonUrl : basePath+"/permission/list.shtml",
		dymCol:true,
		checkbox : true
	});
	
	$("#add").click(function(){
		var ck = grid.getSelectedCheckbox();
		alert(JSON.stringify(ck));
	});
});
