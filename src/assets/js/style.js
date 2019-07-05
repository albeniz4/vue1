var cWidth, cHeight, pLeft, pTop;	
$(function(){
	//컨텐츠 사이즈
	//setWidth();
	//setHeight();
	//pTop = $(document).height() / 2;
	//$(".control").css("top", pTop + "px");
	//네비게이션 영역 컨트롤
	/*$(".control").draggable({
		axis: "x", 
		containment: [180, , 500, ],
		drag : dragSize
	});*/
	
	var isNav = true;
	$(".control").click(function(e){ 
		if(isNav){
			$("#wrapper").addClass("hideGnb");
			//$("#header").css("width", "0px").css("min-width","0px");
			//$("#header .nav, #header .logo, #header .title").css("display","none");
			//$(this).css("left", "0px");
			//setWidth();
			isNav = false;			
		} else {
			$("#wrapper").removeClass("hideGnb");
			//$("#header").css("width", "180px").css("min-width","180px");
			//$("#header .nav, #header .logo, #header .title").css("display","block");
			//$(this).css("left", "180px");
			//setWidth();
			isNav = true;
		}
		
		e.preventDefault();
	});
});

$(window).resize(function(){
	//setWidth();
});

function setWidth(){
	cWidth = $("#wrapper").width() - $("#header").width() - 30;
	cWidth2 = $("#wrapper").width() - $("#header").width() - 40;	
	$("#gnb").css("width", cWidth + "px");
	$("#container").css("width", cWidth2 + "px");
}

function setHeight(){
	cHeight = $("#gnb").height() + $("#container").height() + 50;	
	//console.log($("#header .nav").height());
	if(cHeight < $("#header .nav").height() + 165){
		cHeight = $("#header .nav").height() + 165;
	}
	$("#header").css("min-height", cHeight + "px");
}
function dragSize(){
	pLeft = parseInt($(".control").css("left"));
	cWidth = $("#wrapper").width() - pLeft - 50;	
	$("#header").css("width", pLeft + "px");	
	$("#container").css("width", cWidth + "px");
}