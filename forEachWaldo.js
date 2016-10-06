//Refactor the function findWaldo to use the forEach()
// method instead of a for loop.

function findWaldo(arr, found) {
  arr.forEach(function(elm, index) {
  	if (elm == "Waldo") {
  		found(index)};
  	});
}
  


function actionWhenFound(index) {
	
  console.log(`Found Waldo at index ${index} !`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);