function countPermutations(short, big) {
	var shortSorted = short.split("").sort(); //O(S log S)
	var bigArr = big.split("");
	for (var i = 0; i < big.length - short.length; i++) {
		var bigSubSorted = bigArr.slice(i, i + short.length).sort(); ////O(S log S)
		if (shortSorted.join("") === bigSubSorted.join("")) {
			$("#res_task1").append(i + " ");
		}
	}
}

//O(B)*O(S*logS + 1)