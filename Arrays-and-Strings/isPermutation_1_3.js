//1.3.  Given  two  strings, write a method to  decide if one is permurtation of the other

//find all permutations, recursive solution
function permutation(prefix, str) {
    if (str.length===0) {
       console.log(prefix)
    }
    else {
        for (var i =  0; i<str.length;i++) {
            var newprefix = prefix+str.charAt(i),
                newstring =  str.substring(0,i)+str.substring(i+1);
            permutation(newprefix, newstring);
        }
    }
}

//function call
permutation("","abcd")

//easy solution
function isPermutation(a,b) {
   if (a.length === b.length) {
       return a.split("").sort().join("")=== b.split("").sort().join("")
   }
    return false;
}

//function call
isPermutation("string", "irsngt")
