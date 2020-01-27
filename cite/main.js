
//Вывод объектов эелементов в консоль
let grid_parent = document.getElementsByClassName("grid_parent")[0];
console.log("Grid parent:");
console.log(grid_parent);
let grid_array = grid_parent.getElementsByClassName("grid");
console.log("Array of grids:");
console.log(grid_array);


// Получаем объект родительского блока .parent_flex
let flex_parent = document.getElementById("flex_parent");
// Получаем массив элементов .flex
let flex_array = flex_parent.getElementsByClassName("flex");
// Получаем объект кнопки
let btn = document.getElementById("btn_color");
// Событие onclick на кнопку
btn.onclick = function(){
	colors = ["blue", "red", "green", "gold", "black", "gainsboro", "pink", "purple"];
		for(let flex of flex_array){ // for of по массиву с .flex
		ci = parseInt(Math.random() * colors.length); // рандомный индекс от 0 до доинны массива colors
		flex.style.background = colors[ci];
	}
} 