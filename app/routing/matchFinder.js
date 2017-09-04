var matchFinder = function (user, otherUsers){

	var usersDiffValues = [];
	var diffArray = [];

	for (i = 0; i < otherUsers.length; i++) {

	    for (x = 0; x < otherUsers[i].scores.length; x++){

	    	diffArray.push(Math.abs(otherUsers[i].scores[x] - user[x]));
	    };

	    usersDiffValues.push(findSum(diffArray));
	    diffArray = [];
	};

	var matchIndex = indexOfMin(usersDiffValues);
	return matchIndex;

}

//function for finding sum of an array of numbers
function findSum (array){

	var result = 0;

	function add(a, b) {
		return a + b;
	}

	result = array.reduce(add, 0);

	return result;

}

//function for finding index of smallest number in array

function indexOfMin (arr) {

	var min = arr[0];
	var index = 0;

	for (i = 1; i < arr.length; i++) {
		if (arr[i] < min) {
		    index = i;
		    min = arr[i];
		}
	}

	return index;

}


module.exports = matchFinder;