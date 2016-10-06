var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

var result = input.map(function(current) {
	var xKey = current['x']*current['x'];
	var yKey = current['y']*current['y'];
	var zKey = xKey + yKey;
	var sprRoot = Math.sqrt(zKey);
	return sprRoot
});


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

