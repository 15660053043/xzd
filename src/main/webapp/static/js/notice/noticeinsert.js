$(function(){
	//加载编辑器
	var ue = UE.getEditor('html_container');
	//图片上传配置
	UE.Editor.prototype._bkGetActionUrl = UE.Editor.prototype.getActionUrl;
    UE.Editor.prototype.getActionUrl = function(action){
         if (action == 'uploadimage') {
			return basePath+'/upload/notice_image.shtml';
         }
         else if (action == 'uploadvideo') {
            return basePath+'/videoupload';
         }
         else {
             return this._bkGetActionUrl.call(this, action);
         }
    };
	
	$("#form").validate({
		submitHandler:function(form){
			var loadingIndex;
			$.ajax({
				url:basePath+"/notice/insert.shtml",
				contentType:'application/json;charset=utf-8',
				dataType:"JSON",
				type:"POST",
				data:JSON.stringify($.extend($("#form").serializeJSON(),$("#attachment_form").serializeJSON())),
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
			title:{required:true,maxlength:20}
		},
		messages:{
		title:{required:"公告标题不能为空",maxlength:"不能超过20个字符"}
		},
		errorPlacement: function (error, element) { 
			layer.tips(error.text(), $(element),{tipsMore: true,tips:1});
		},
		errorClass:"invali"
	});
});