var friendsData = require("../data/friends");

var dupFinder = function (user){

	var dupFound = false;

	for (i = 0; i < friendsData.length; i++) {
		if (user.name === friendsData[i].name && user.photo === friendsData[i].photo)
			dupFound = true;
	}

	return dupFound;
}


module.exports = dupFinder;