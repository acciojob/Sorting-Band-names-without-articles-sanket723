//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

let obj ={};
let articles = ['A','An','The'];
let splittedArray = [];

for(let i=0;i<touristSpots.length;i++){
	let str = touristSpots[i];
	let arr = str.split(/\s+/);  // Split by spaces

	if(articles.includes(arr[0])){
		arr.shift();  // Remove the first word
	}

	let x = arr.join(" "); //Join remaining words and makes string
	splittedArray[i] = x;   //put this value in new array
	
	obj[x] = touristSpots[i];   //put the key-value pair in object
							    //key as splitted string and value as original string
								//so we can use later
}

splittedArray.sort();       //this will sort the string array lexicographically
// alert(splittedArray);

let ans = [];
for(let i=0; i<splittedArray.length; i++){
	ans.push(obj[splittedArray[i]]);       //putting original values in respective places 
}

console.log(ans);
// alert(ans);





