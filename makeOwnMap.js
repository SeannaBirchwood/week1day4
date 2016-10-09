var trees = [{logs: 5, type: 'hardwood', name:'elm'},
							{logs: 8, type: 'hardwood', name: 'birch'},
							{logs: 3, type: 'hardwood', name:'maple'},
							{logs: 8, type: 'softwood', name: 'pine'},
							{logs: 2, type: 'softwood', name: 'spruce'}];
console.log(trees)

var invenTrees = trees.map(function(logging) {
	var typeKey = logging['type']
	var logsKey = logging['logs']
	var nameKey = logging['name']
	var whatToDo = " goes for paper";
	var whatToDo2 = " becomes furniture";
	//trees.forEach(function(type) {
	if (typeKey === 'softwood') {
		return nameKey + whatToDo
	} else {
			return nameKey + whatToDo2
		}
});

console.log(invenTrees[0]);
console.log(invenTrees[1]);
console.log(invenTrees[2]);
console.log(invenTrees[3]);
console.log(invenTrees[4]);