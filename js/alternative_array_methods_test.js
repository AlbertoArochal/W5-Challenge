import {
    altLength,
    altIndexOf,
    altPush,
    altPop,
    altFilter,
    altEvery,
    altFind,
    altIncludes,
    altJoin,
    altShift,
    altSlice,
    altSome,
    altUnShift,
} from "./alternative_array_methods.js";

describe("Given altLength", () => {
    const arrData = [3, 75, 5, 6, "macarra", true];
    describe("Receive array as parameter", () => {
        test(`Return array length ${arrData.length}`, () => {
            const result = altLength(arrData);
            const expected = arrData.length;
            expect(result).toBe(expected);
        });
    });
});

describe("Given altIndexOf", () => {
    const arrData = [3, 75, 5, 6, "macarra", true];
    describe("Receive Parameter and value", () => {
        test(`Then result should be the array length ${arrData.length}`, () => {
            const result = altIndexOf(arrData, 75);
            const expected = arrData.indexOf(75);
            expect(result).toBe(expected);
        });
    });
});
