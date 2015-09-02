//1.1 implement an algorithm to  determine that string  has all unique characters
//(what if you cannot use additional  datastructures)

//the solution using additional  data structures
function allCharsUnique1 (str) {
    var arr = str.split("").sort();
    arr = arr.filter(function (element, index) {
        if (index > 0) {
            return element !== arr[index - 1];
        }
    })
    return arr.join("").length === str.length;
}

//the solution  from  the author Gayle Laakmann McDowell rewritten in  javascript
function allCharsUnique2 (str) {
    //we assume that all characters are lowercase, cause otherwise more thant 32 bit is required
    var checker = 0;
    for (var i = 0;i<str.length;i++) {
        //find a difference btween ascii code of given character and a
        var val = str.charCodeAt(i)-"a".charCodeAt(0);
        //make bitwise leftshit
        var leftShiftVal = 1<<val
       // if the letter happened earlier than bitwise and result in one
       //which is bigger than  0 (e.g 10&10>0)
        if ((checker & leftShiftVal) >  0 ) {
            return false;
        }
        checker |=leftShiftVal;
    }
    return true;
}

//function call
allCharsUnique1("abvbfaeofg");
allCharsUnique2("abvbfaeofg");
