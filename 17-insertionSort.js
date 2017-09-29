function insertionSort(str) {
    var temp, inner;
    for (var outer = 1; outer <= str.length - 1; ++outer) {
            temp = str[outer];
            inner = outer;
        while (inner > 0 && (str[inner - 1] >= temp)) {
            str[inner] = str[inner - 1];
            --inner;
        }
        str[inner] = temp;
    }
    console.log(str)
}
insertionSort([1,4,2,3,5,6,5])