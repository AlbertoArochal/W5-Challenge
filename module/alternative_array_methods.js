/* eslint-disable no-empty */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable quotes */
const altArray = {};

const altLength = (array) => {
    let counter = 0;
    array.forEach((element) => counter++);
    return counter;
};

const altIndexOf = (array, unit) => {
    let position;
    array.forEach((element, counter) => {
        counter++;
        if (element === unit) {
            position = counter - 1;
        }
    });
    return position;
};

const cars = [1, 2, 3, 4, 5, 6, "bitch"];

console.log(altIndexOf(cars, 4));
