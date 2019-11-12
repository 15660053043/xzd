var pageii = null;
var grid = null;
$(function() {
	grid = lyGrid({
		id : 'paging',
		l_column : [ {
			colkey:"username",
			name:"用户"
		},{
			colkey:"action",
			name:"操作"
		}, {
			colkey:"details",
			name:"详情"
		}, {
			colkey:"actiontime",
			name:"操作时间"
		}, {
			colkey:"ip",
			name:"ip地址"
		}],
		jsonUrl : basePath+"/log/list.shtml",
		dymCol:true,
		checkbox : true
	});
	
	$("#search").click("click", function() {// 绑定查询按扭
	    var searchParams = $("#form").serializeJSON();
	    grid.setOptions({//设置参数，具体参数与表格参数一致
	        data : searchParams//查询条件数据，必须是json格式
	    });
	});
});
