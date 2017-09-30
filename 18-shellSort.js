//第一种
function shellSort(array) {
    function swap(array, i, k) {
        var temp = array[i];
        array[i] = array[k];
        array[k] = temp;
    }
    var length = array.length,
        gap = Math.floor(length / 2);//间隔为长度的一半
    while (gap > 0) {
        for (var i = gap; i < length; i++) {
            for (var j = i; 0 < j; j -= gap) {
                //先取gap处的元素，与前面的元素对比
                if (array[j - gap] > array[j]) {
                    swap(array, j - gap, j);
                } else {
                    break;
                }
            }
        }
        gap = Math.floor(gap / 2);//间隔变为原来的一半
    }
    return array;
}


//第二种
function shellsort() {
    for (var g = 0; g < this.gaps.length; ++g) {
        for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
            var temp = this.dataStore[i];
            for (var j = i; j >= this.gaps[g] &&this.dataStore[j-this.gaps[g]] > temp;j -= this.gaps[g]) {
                this.dataStore[j] = this.dataStore[j - this.gaps[g]];
            }
            this.dataStore[j] = temp;
        }
    }
}
this.gaps = [5,3,1];


//以上两种的复杂度与计算时间相同