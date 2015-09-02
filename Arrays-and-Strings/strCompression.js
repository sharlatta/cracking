//1.5 Implement a method to perform basic string compression using the counts of repeated characters.
//    For example, the string aabcccccaaa would become a2blc5a3.
//    If the "compressed" string would not become smaller than the original string,
//    your method should return the original string.
function compressString1(str) {
    var count = 0,
        newString = "",
        i = 0;
    while (i < str.length) {
        if (str.charAt(i) === str.charAt(i + 1)) {
            count++;
        }
        else {
            newString += str.charAt(i) + (count + 1);
            count = 0;
        }
        i++;
    }

    return newString.replace(/1/g, "") === str ? str : newString;
}

//function call
compressString1("aaabbccfffgheaa")

function compressString2(str) {
    var newString =  str.match(/(.)\1*/g).map(function (match) {
        return match.charAt(0) + match.length;
    }).join("");
    return newString.replace(/1/g, "") === str ? str : newString;
}

//function call
compressString2("aaabbccfffgheaa")
