$(function(){
	$("#form").validate({
		submitHandler:function(form){
			var loadingIndex;
			$(form).ajaxSubmit({
				url:basePath+"/role/insert.shtml",
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
			name:{required:true,
				maxlength:20,
				remote:{
					url:basePath+"/role/check.shtml",
					type:"POST",
					data:{
						name:function(){return $("#form [name='name']").val()}
					}
				}
			}
		},
		messages:{
			name:{required:"角色名不能为空",maxlength:"长度不能超过20",remote:"该角色名称已存在"}
		},
		errorPlacement: function (error, element) { 
			layer.tips(error.text(), $(element),{tipsMore: true,tips:1});
		},
		errorClass:"invali"
	});
});