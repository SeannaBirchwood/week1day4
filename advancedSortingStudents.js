var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


var result = students.sort(function(a, b) {
	if(a['name'] < b['name']) {
		return -1;
	}
	if(a['name'] > b['name']) { 
		return 1;
	}
	if(a['name'] == b['name']) {
		 (a['age'] > b['age'])
			return 1;
	} 
	// var nameB = b['name'];
	// if(nameA !== nameB) {
	// 	return students['name'].sort()
});


console.log(result);


//expected output:

 // { id: 4, name: "alex",     age: 30 }
 // { id: 3, name: "alex",     age: 22 },
 //  { id: 1, name: "bruce",    age: 40 },
 //  { id: 2, name: "zoidberg", age: 22 },
  
 