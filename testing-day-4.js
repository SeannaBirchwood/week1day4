// var myFn = function() {
//   console.log("I am function.");
// }

// myFn.someAttribute = 42;
// console.log(myFn.someAttribute);

// function runner(f) {
//   f();
// }

// runner(myFn);


// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == "Waldo") {
//       found();   // execute callback
//     }
//   }
// }

// function actionWhenFound() {
//   console.log("Found him!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


var countDown = function(num, _done){
  // measure when the loop started
  var start = new Date().getTime();
  var count = 0;
  for(var i = num; i >= 0; i--){
    console.log(i);
  }
  // measure when the loop was done
  var end = new Date().getTime();
  // invoke the callback with the time diff
  return _done(num, end - start);
}

// Test the `countDown` function
countDown(80, function(n, time_diff){
  console.log(`Counting to ${n} took ${time_diff} ms`);
});
