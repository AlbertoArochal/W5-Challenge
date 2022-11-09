/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable quotes */

const cars = [1, 2, 7, 4, 5, 6, "mazorca"];

const altArray = new Object();
const altLength = (array) => {
    let counter = 0;
    for (const element of array) {
        counter++;
    }
    return counter;
};

const altIndexOf = (array, unit) => {
    let position;
    let counter = 0;
    for (const element of array) {
        counter++;
        if (element === unit) {
            position = counter - 1;
        }
    }
    return position;
};

const altPush = (array, unit) => {
    const position = altLength(array);
    array[position] = unit;
    return array;
};

const altSlice = (array, start, end) => {
    const slice = [];
    if (end > altLength(array)) {
        end = altLength(array) - 1;
    }
    for (let i = start; i <= end; i++) {
        altPush(slice, array[i]);
    }
    return slice;
};

const altPop = (array) => {
    array = altSlice(array, 0, altLength(array) - 2);
    return array;
};

const altUnShift = (array, unit) => {
    const unshifted = [unit];
    for (const element of array) {
        altPush(unshifted, element);
    }
    globalThis.cars = unshifted;
    return altLength(unshifted);
};

const altShift = (array) => {
    const shifted = array[0];
    array = altSlice(array, 1, altLength(array) - 1);
    return shifted;
};

const altSome = (array, callback) => {
    let booleator = false;
    for (const element of array) {
        if (callback(element)) {
            booleator = true;
        }
    }
    return booleator;
};

const altEvery = (array, callback) => {
    let booleator = true;
    for (const element of array) {
        if (!callback(element)) {
            booleator = false;
        }
    }
    return booleator;
};

const altFind = (array, callback) => {
    let i = 0;
    for (const element of array) {
        if (callback(element)) {
            return array[i];
        }
        i++;
    }
};

const altFilter = (array, callback) => {
    const cumulator = [];
    for (const element of array) {
        if (callback(element)) {
            altPush(cumulator, element);
        }
    }
    return cumulator;
};

console.log(
    altFilter(cars, function (element) {
        return element > 5;
    })
);
