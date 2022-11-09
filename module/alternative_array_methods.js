/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable quotes */
const altArray = {};

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

const altShift = (array, unit) => {
    const shifted = [unit];
    for (const element of array) {
        altPush(shifted, element);
    }
    return shifted;
};

const cars = [1, 2, 3, 4, 5, 6, "bitch"];

console.log(altIndexOf(cars, "bitch"));
