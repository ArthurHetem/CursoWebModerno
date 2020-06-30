function classificaTriangulo(x, y, z) {
    if (x == y && y == z){
        return 'Equilátero'
    } else if (x == y || y == z && x == z){
        return 'Isóceles'
    } else {
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(1, 1, 1))
console.log(classificaTriangulo(1, 0, 1))
console.log(classificaTriangulo(1, 0, 2))