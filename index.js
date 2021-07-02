let countEl = document.getElementById("count-el");
console.log(countEl);
let count = 0;
let saveEl = document.getElementById("save-el");
//let reSetEl =document.getElementById("reSet-el");

function increment(){
	count+=1;
	countEl.innerText = count;
}
//1.Create a function save which will show the number of people entered to the subway
function save(){
	let countStr = count + " - ";
	saveEl.textContent += countStr;
};
// Create Previews entries: 4-5-11-
function reset(){
	let countStr1 = 0;
	count = 0;
	saveEl.textContent ="Previous entries:";
	countEl.innerText = 0;
}
