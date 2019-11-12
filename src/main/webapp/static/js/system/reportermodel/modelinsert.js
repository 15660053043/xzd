$(function(){
	$("#form").validate({
		submitHandler:function(form){
			var loadingIndex;
			$(form).ajaxSubmit({
				url:basePath+"/reportermodel/insert.shtml",
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
			modelname:{required:true,maxlength:20},
			modeltypeid:{required:true},
			fieldname:{required:true,maxlength:20},
			reg:{maxlength:150},
			tip:{maxlength:50}
		},
		messages:{
		modelname:{required:"附加数据名称不能为空",maxlength:"不能超过20个字符"},
		modeltypeid:{required:"附加数据类型不能为空"},
		fieldname:{required:"字段名不能为空",maxlength:"字段名不能超过20个字符"},
		
		reg:{maxlength:"正则表达式不能超过150个字符"},
		tip:{maxlength:"提示信息不能超过50个字符"}
		},
		errorPlacement: function (error, element) { 
			layer.tips(error.text(), $(element),{tipsMore: true,tips:1});
		},
		errorClass:"invali"
	});
});