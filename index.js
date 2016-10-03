$(function () {
	$("#task1").click(function (e) {
		e.preventDefault();
		countPermutations($("#shortStr").val().trim(), $("#bigStr").val().trim());
	});
});