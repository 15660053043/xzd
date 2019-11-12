$(function(){
	$("#form").validate({
		submitHandler:function(form){
			var loadingIndex;
			$(form).ajaxSubmit({
				url:basePath+"/reporter/insert.shtml",
				dataType:"JSON",
				beforeSubmit:function(){
					loadingIndex = layer.load(1,{shade: [0.8, '#393D49']});
				},
				success:function(data){
					layer.close(loadingIndex);
					if(data.ret == responseStatus.SUCCESS){
						layer.msg(data.msg);
						var index = parent.layer.getFrameIndex(window.name);
						parent.layer.close(index);
					}else if(data.ret == responseStatus.FAILD){
						layer.msg(data.msg);
					}
				},
				error:function(){
					layer.close(loadingIndex);
					layer.msg("链接错误");
				}
			});
		},
		focusInvalid: true,
		rules:{
		
		},
		messages:{
		
		},
		errorPlacement: function (error, element) { 
			layer.tips(error.text(), $(element),{tipsMore: true,tips:1});
		},
		errorClass:"invali"
	});
});

