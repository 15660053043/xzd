$(function(){
	$('.loginbox').css({
		'position' : 'absolute',
		'left' : ($(window).width() - 692) / 2
	});
	$(".loginbody").css({
		'height' : $(window).height() - 45
	});
	$(window).resize(function() {
		$('.loginbox').css({
			'position' : 'absolute',
			'left' : ($(window).width() - 692) / 2
		});
	})
	
	$("#login_form").validate({
		submitHandler:function(form){
			var loadingIndex;
			$(form).ajaxSubmit({
				dataType:"JSON",
				beforeSubmit:function(){
					loadingIndex = layer.load(1,{shade: [0.8, '#393D49']});
				},
				success:function(data){
					layer.close(loadingIndex);
					if(data.ret == responseStatus.SUCCESS){
						window.location.href=basePath+"/home.shtml";
					}else if(data.ret == responseStatus.FAILD){
						layer.msg(data.msg);
					}
				}
			});
		},
		focusInvalid: true,
		rules:{
			username:{required:true},
			password:{required:true}
		},
		messages:{
			username:{required:"用户名不能为空"},
			password:{required:"密码不能为空"}
		},
		errorPlacement: function (error, element) { 
			layer.tips(error.text(), $(element),{tipsMore: true,tips:1});
		},
		errorClass:"invali"
	});
});