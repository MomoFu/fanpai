function giveValue(bb){
    $(".target #clickOneBack .rewards p").text(bb[0]);
 	$(".target #clickTwoBack .rewards p").text(bb[1]);
 	$(".target #clickThreeBack .rewards p").text(bb[2]);
 	$(".target #clickFourBack .rewards p").text(bb[3]);
 	$(".target #clickFiveBack .rewards p").text(bb[4]);
 	$(".target #clickSixBack .rewards p").text(bb[5]);
 	$(".target #clickSevenBack .rewards p").text(bb[6]);
 	$(".target #clickEightBack .rewards p").text(bb[7]);
    $(".target #clickNineBack .rewards p").text(bb[8]);
}
function changeSty(judg,fsize){
    if(judg=="8元现金"){
		$("#fetch").animate({top:'0%'},1000).css("display","block");
	}
	else if(judg=="拼车劵"){
    	$("#pingchejuan").animate({top:'0%'},1000).css("display","block");
	}
	else if(judg=="海淘代金券"){
	    $("#haitaojuan").animate({top:'0%'},1000).css("display","block");
	    fsize.css("font-size","12px");
	}
	else if(judg=="继续加油"){
    	$("#continue").animate({top:'0%'},1000).css("display","block");
	}
	else if(judg=="2元话费"){
    	$("#twohuafei").animate({top:'0%'},1000).css("display","block");
	}
	else if(judg=="100M流量"){
	    $("#wifi100").animate({top:'0%'},1000).css("display","block");
	    fsize.css("font-size","12px");
	}
	else if(judg=="50M流量"){
    	$("#wifi50").animate({top:'0%'},1000).css("display","block");
	}
	else if(judg=="理财金"){
        $("#licaijing").animate({top:'0%'},1000).css("display","block");
	}
	else if(judg=="25元还款金"){
	    $("#huankuanjing").animate({top:'0%'},1000).css("display","block");
	    fsize.css("font-size","12px");
	}
}