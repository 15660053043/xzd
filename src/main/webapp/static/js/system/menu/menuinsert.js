$(function(){
	$("#form").validate({
		submitHandler:function(form){
			var loadingIndex;
			$(form).ajaxSubmit({
				url:basePath+"/menu/insert.shtml",
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
			menuname:{required:true,maxlength:20},
		},
		messages:{
			menuname:{required:"附加数据名称不能为空",maxlength:"不能超过20个字符"},
		},
		errorPlacement: function (error, element) { 
			layer.tips(error.text(), $(element),{tipsMore: true,tips:1});
		},
		errorClass:"invali"
	});
});