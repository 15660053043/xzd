$(function(){
	var leftFrame= top.frames.leftFrame;
	leftFrame.pageLoad();
});
function setPlace(place){
	var placeul = $(".placeul");
	$.each(place,function(i,e){
		placeul.append("<li><a href='javascript:void(0)'>"+e+"</a></li>");
	});
}