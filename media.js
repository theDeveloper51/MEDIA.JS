// media.js
// by theDeveloper51
function media(px,func1,func2){
	function width(){
		if(typeof(window.innerWidth) == 'number'){
			return window.innerWidth;
		}else if(document.documentElement.clientWidth){
			return document.documentElement.clientWidth;
		}else if(document.body.clientWidth){
			return document.body.clientWidth;
		}
	}
	var newpx = parseInt(px.slice(1));	//PX
	var bigsmall = px.slice(0,1);		//Bigger or Smaller

	if(bigsmall == '>'){
		if(width() > newpx){
				func1();
		}else{
				func2();
		}
		window.onresize = function(){
			if(width() > newpx){
				func1();
			}else{
				func2();
			}
		}
	}else if(bigsmall == '<'){
		if(width() < newpx){
				func();
		}else{
				func2();
		}
		window.onresize = function(){
			if(width() < newpx){
				func1();
			}else{
				func2();
			}
		}
	}else{
		console.log('WRONG!!!');
	}
}