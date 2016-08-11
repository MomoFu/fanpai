function giveValue(cc){
    $(".target #clickOneBack .rewards p").text(cc[0]);
 	$(".target #clickTwoBack .rewards p").text(cc[1]);
 	$(".target #clickThreeBack .rewards p").text(cc[2]);
 	$(".target #clickFourBack .rewards p").text(cc[3]);
 	$(".target #clickFiveBack .rewards p").text(cc[4]);
 	$(".target #clickSixBack .rewards p").text(cc[5]);
 	$(".target #clickSevenBack .rewards p").text(cc[6]);
 	$(".target #clickEightBack .rewards p").text(cc[7]);
    $(".target #clickNineBack .rewards p").text(cc[8]);
}
function changeSty(judg,fsize){
    if(judg=="苏宁红包"){
		$("#fetch").animate({top:'0%'},300).css("display","block");
	}
	else if(judg=="拼车劵"){
    	$("#pingchejuan").animate({top:'0%'},300).css("display","block");
	}
	else if(judg=="Higo优惠券"){
	    $("#higo").animate({top:'0%'},300).css("display","block");
	    fsize.css("font-size","12px");
	}
	else if(judg=="50M流量"){
    	$("#wifi50").animate({top:'0%'},300).css("display","block");
	}
	// else if(judg=="2元话费"){
 //    	$("#twohuafei").animate({top:'0%'},300).css("display","block");
	// }
	// else if(judg=="100M流量"){
	//     $("#wifi100").animate({top:'0%'},300).css("display","block");
	//     fsize.css("font-size","12px");
	// }
	// else if(judg=="50M流量"){
 //    	$("#wifi50").animate({top:'0%'},300).css("display","block");
	// }
	else if(judg=="理财金"){
        $("#licaijing").animate({top:'0%'},300).css("display","block");
	}
	else if(judg=="25元还款金"){
	    $("#huankuanjing").animate({top:'0%'},300).css("display","block");
	    fsize.css("font-size","12px");
	}
}
function model(status){
           if(status==1){ 
                var arr1=new Array(9);
                var bb=new Array(9);
                arr1=["苏宁红包","Higo优惠券","50M流量","理财金","拼车劵","50M流量","25元还款金","Higo优惠券","拼车劵"];
                for(var i=0;i<9;i++){
		 			var valueOne = parseInt(Math.random()*(9-i));
		 			//console.log(valueTwo);
		 			bb[i] = arr1[valueOne];
		 			arr1.splice(valueOne,1);
		 			//console.log(arr2);
		 		}
		 		console.log(bb);
		 		giveValue(bb);
		 		$('.target .clickMeFront').click(function(){
			 		var judg = $(this).parent().find("p").text();
			 		var fsize = $(this).parent().find("p");
			 		changeSty(judg,fsize);
			 		
				});
				
		 }
			 if(status==2){
			 	var arr2=new Array(9);
			 	var aa=new Array(9);
			 	for(var j=0;j<=4;j++){arr2[j]="获得VIP";}
			 	for(var j=5;j<arr2.length;j++){arr2[j]="谢谢参与";}
			 		//console.log(arr2);
			 		for(var i=0;i<9;i++){
			 			var valueTwo = parseInt(Math.random()*(9-i));
			 			//console.log(valueTwo);
			 			aa[i] = arr2[valueTwo];
			 			arr2.splice(valueTwo,1);
			 			//console.log(arr2);
			 		}
			 	console.log(aa);
			 	giveValue(aa);
               
			 	 $(".target .clickMeFront").click(function(){
                  	    //console.log(0);
                        $(this).parent().find("p").removeAttr("style");
                  	    if($(this).parent().find("p").text()=="获得VIP")
                          {
                              $("#vip").animate({top:'0%'},300).css("display","block");
                              //console.log(1);
	                  	   }else{
	                          $("#continue").animate({top:'0%'},300).css("display","block");
	                  	   }
	                  	  
				  });   
			 	 
			 }
			 if(status==3){
			 	//var arr2=new Array(9);
			 	var arr3=new Array(9);
			 	for(var j=0;j<arr3.length;j++){arr3[j]="谢谢参与";}
			 		console.log(arr3);
			 	    giveValue(arr3);

			 	   $(".target .clickMeFront").click(function(){
			 	   	 $(this).parent().find("p").removeAttr("style");
			 	   $("#continue").animate({top:'0%'},300).css("display","block");
			 	    });
			 }
}
function sameWork(){
	$(".maskContainer").css('display', 'none').animate({top:'100%'},1);
	$(".target .clickMeFront").addClass("originFront").removeClass("front").removeClass("originFront");
	$(".target .clickMeBack").addClass("originBack").removeClass("back").removeClass("originBack");
	// 此处明天要做修改接收来自服务器的status判断
	
	status++;
	console.log(status);
	setTimeout(model(status),500);
	judgenoChance();
}
function judgenoChance(){
	if(loadStorage("times")<=0){
		$(".target").unbind();
		$(".target .clickMeFront").unbind();
		$("#over").animate({top:'0%'},0).css("display","block");
	    setTimeout("$('#over').css('display', 'none').animate({top:'100%'},1)",2000);
		$(".target .clickMeFront").click(function(){
			 $("#over").animate({top:'0%'},0).css("display","block");
			 setTimeout("$('#over').css('display', 'none').animate({top:'100%'},1)",2000);
		});
	}
}

// function rado(stat,apple){
//      var modelradom = [1,2,3]; 
//      modelradom.splice(stat-1,1);
     
//      	  var radomvalue = parseInt(Math.random()*(2-apple));
//      	  var result = modelradom[radomvalue];
 
//      }
//      return result;
// }