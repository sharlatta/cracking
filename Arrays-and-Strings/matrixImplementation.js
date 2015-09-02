//creating square matrix with incrementing numbers
function Matrix(dimension) {
    var matrix = [];
    for (var i = 0; i< dimension;i++) {
        matrix[i] = new Array(dimension)
        for (var z = 0; z < dimension; z++) {
            matrix[i][z] = i*dimension+z+1;
        }
    }
    return matrix;
}
