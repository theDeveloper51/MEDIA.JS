// media.js
// by theDeveloper51
// requires jQuery
function media(px,func1,func2){
	var newpx = parseInt(px.slice(1));
	var bigsmall = px.slice(0,1);
	if(bigsmall == '>'){
		if($(window).width() > newpx){
				func1();
		}else{
				func2();
		}
		$(window).resize(function(){
			if($(window).width() > newpx){
				func1();
			}else{
				func2();
			}
		});
	}else if(bigsmall == '<'){
		if($(window).width() < newpx){
				func();
		}else{
				func2();
		}
		$(window).resize(function(){
			if($(window).width() < newpx){
				func1();
			}else{
				func2();
			}
		});
	}else{
		console.log('WRONG!!!');
	}
}