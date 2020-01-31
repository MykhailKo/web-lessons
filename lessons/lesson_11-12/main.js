
// setTimeout() 
// setInterval()
let block = document.getElementsByClassName('block')[0];

/*
block.onclick = function(){
	setTimeout(function(){
		console.log('Hi men');
	}, 3000);
}
*/

colors = ["blue", "red", "green", "gold", "black", "gainsboro", "pink", "purple"];
		
let interval = setInterval(function(){
		ci = parseInt(Math.random() * colors.length);
		block.style.background = colors[ci];
	}, 1000);

block.onmouseover = function(){
	clearInterval(interval);
	delete interval;
}

block.onmouseout = function(){
	interval = setInterval(function(){
		ci = parseInt(Math.random() * colors.length);
		block.style.background = colors[ci];
	}, 2000);
}


let slides = document.getElementsByClassName("slides")[0];
let margin = 0;

let slide_interval = setInterval(nextSlide, 2000);

slides.onmouseover = function(){
	clearInterval(slide_interval);
	delete slide_interval;
}

slides.onmouseout = function(){
	slide_interval = setInterval(nextSlide, 2000);
}


function nextSlide(){
	if(margin == -180) {
		margin = 0;	
	}else {
		margin -= 45;
	}
	slides.style.margin = "0 0 0 " + margin + "vw";
}