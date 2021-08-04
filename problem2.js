// একটা function লিখতে হবে যেখানে একটা array দেওয়া হবে এবং সেই এরের 
// তিনটা করে উপাদান নিয়ে মোটে কতটা ত্রিভূজ বানানো যাবে
// sh shihab

let arr = [3, 4, 5, 6, 2, 8, 2, 7, 1, 9, 0, 21, 54, 89];

function problem(array) {
	// body...
	let itemOfVal = Math.floor(array.length / 3);
	
	return itemOfVal;
}

console.log(problem(arr));