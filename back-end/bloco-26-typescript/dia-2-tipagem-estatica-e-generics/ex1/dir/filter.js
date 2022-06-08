"use strict";
function myFilter(array, funcao) {
    const filtered = [];
    for (let i = 0; i < array.length; i++) {
        if (funcao(array[i], i, array))
            filtered.push(array[i]);
    }
    return filtered;
}
console.log(myFilter([0, 1, 2, 3, 4], (item, index, array) => item < 3));
