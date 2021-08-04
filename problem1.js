// প্রথম value টা পর পর কতবার গুন হবে তা পরের value বলে দিব এমন function লিখতে হবে
// sh shihab

function app(num, num2) {
	// body...
	let newNum = 1;
	
	for(var i = 0; i < num2; i++) {
		newNum = newNum * num;
	}
	
	return newNum
}

console.log(app(4, 5));