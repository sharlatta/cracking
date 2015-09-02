//1.6 given an image represented by N*N matrix, where each pixel in th e image is 4 bytes
//write a method to rotate the image by 90  degrees. Can you do this in place?

//not in place algorithm
function turn90(matrix) {
    var dimension = matrix.length,
        turnedMatrix = new Matrix(dimension);
    for (var i = 0;i<dimension;i++) {
        for (var z = 0;z<dimension;z++) {
            turnedMatrix[z][dimension-i-1] = matrix[i][z]
        }
    }
    return turnedMatrix;
}

//function call
var m = Matrix(5)
turn90(m)


//in place matrix rotation  should be  here
//TODO
