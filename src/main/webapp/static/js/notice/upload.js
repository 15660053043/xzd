$(function(){
	 //文件上传
    uploader = new plupload.Uploader({
    	runtimes : 'html5',
    	browse_button : document.getElementById('upload-file'), // you can pass an id...
    	container: document.getElementById('upload_container'), // ... or DOM Element itself
    	url : basePath+'/upload/notice_file.shtml',
    	multipart:true,
    	file_data_name:"upfile",
    	filters : {
    		max_file_size : '50mb',
    		mime_types: [
    			{title : "Image files", extensions : "jpg,gif,png"},
    			{title : "Zip files", extensions : "zip"},
    			{title : "DOC files", extensions : "doc,docx"}
    		]
    	},
    	init: {
    		PostInit: function() {
    			
    		},
    		FilesAdded: function(up, files) {
    			var file_item;
    			$.each(files,function(index,file){
	    			file_item="<li class='selected' id='"+file.id+"'>"+
	    		    "<span><img class='showImg' src='/images/img01.png' /></span>"+
	    		    "<h2><textarea name='noticeAttachments["+index+"].description' class='description'>"+file.name+"</textarea></h2>"+
	    		    "<input type='hidden' class='filepath' name='noticeAttachments["+index+"].filepath'><input type='hidden' class='filename' name='noticeAttachments["+index+"].filename'>"+
	    		    "<p>[<a class='size' href='javascript:void(0)'>大小</a>]&nbsp;[<a class='progress' hrem='javascript:void(0)'>进度</a>]&nbsp;[<a class='delete' href='javascript:void(0)'>删除</a>]</p>"+
	    		    "</li>";
	    			$("#file-list").append(file_item);
	    			$("#"+file.id).find(".size").text((file.size/1024/1024).toFixed(4)+"MB");
    			});
    			uploader.start();
    		},

    		UploadProgress: function(up, file) {
    			$("#"+file.id).find(".progress").text(file.percent+"%");
    		},
    		FileUploaded: function(up,file,responseObject){
    			var f = $("#"+file.id);
    			var data = JSON.parse(responseObject.response);
    			f.find("img").attr("src",data.show);
    			f.find('.filepath').val(data.filepath);
    			f.find('.filename').val(data.filename);
    		},
    		Error: function(up, err) {
    			alert(err.message);
    		}
    	}
    });

    uploader.init();
    
    $("#attachment_form").ajaxSubmit(function(){
    	return false;
    });
});