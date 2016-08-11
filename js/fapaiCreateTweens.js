function createTweens(){
	var myW = targets[1].offsetWidth ;
	var myH = targets[1].offsetHeight ;

	for( var i = 0  ; i <= tweens.length -1  ; i ++ ){
	  
  	var tween = new TWEEN.Tween(position)
		.to({x: 2+69*i-parseInt(i/3)*300+21*parseInt(i/3), y: -330+parseInt(i/3)*100, rotation: 359},100)
		.delay(0)
		//.easing(TWEEN.Easing.Cubic.In)
		.onUpdate(function(i){
			var j = i;
			return function(){
				targets[j].style.webkitTransform = 'translate(' + position.x + 'px, ' + position.y + 'px)';
			}
			
		}(i))
		.onComplete(function(){
			position.x = 0 ;
			position.y = 0 ;
			//console.log(position);
		});

	tweens[i] = tween ;
	}
}
function init() {

		createTweens();
		for( var i = 0 ; i <tweens.length -1  ; i++){
			tweens[i].chain(tweens[i+1]);
		}
		tweens[0].start();


}
function animate( time ) {

		requestAnimationFrame( animate );
		TWEEN.update( time );
}

function update() {
	
}
