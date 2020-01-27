let btn = document.getElementById("btn");
let text_block = document.getElementById("text");
let pressed = false;
btn.onclick = function(){
	if(pressed){
		text_block.style.height = "16.5vh";
		btn.innerText = "More...";	
		pressed = false;
	}else if(!pressed){
		text_block.style.height = "40vh";
		btn.innerText = "Свернуть";
		pressed = true;
	}
}