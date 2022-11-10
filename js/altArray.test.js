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
} from "./altArray";

const tryFunct = function (element) {
    return element > 5;
};

const separator = "...,";
const newValue = "marcianete";

describe("Given altLength", () => {
    const altArray = [3, 75, 5, 6, "macarra", true];
    describe("Receive array as parameter", () => {
        test(`Return array length ${altArray.length}`, () => {
            const result = altLength(altArray);
            const expected = altArray.length;
            expect(result).toBe(expected);
        });
    });
});

describe("Given altIndexOf", () => {
    const altArray = [3, 75, 5, 6, "macarra", true];
    describe("Receive array and value", () => {
        test(`Return index of value ${altArray.indexOf(75)}`, () => {
            const result = altIndexOf(altArray, 75);
            const expected = altArray.indexOf(75);
            expect(result).toBe(expected);
        });
    });
});

describe("Given altFilter", () => {
    const altArray = [3, 75, 5, 6, "macarra", true];
    describe("Receive function", () => {
        test(`Return boolean`, () => {
            const result = altFilter(altArray, tryFunct);
            const expected = altArray.filter(tryFunct);
            expect(result).toStrictEqual(expected);
        });
    });
});

describe("Given altJoin", () => {
    const altArray = [3, 75, 5, 6, "macarra", true];
    describe("Receive array and string", () => {
        test(`Return string`, () => {
            const result = altJoin(altArray, separator);
            const expected = altArray.join(separator);
            expect(result).toBe(expected);
        });
    });
});

describe("Given Slice", () => {
    const altArray = [3, 75, 5, 6, "macarra", true];
    describe("Receive numbers", () => {
        test(`Return array`, () => {
            const result = altSlice(altArray, 0, 3);
            const expected = altArray.slice(0, 3);
            expect(result).toStrictEqual(expected);
        });
    });
});

describe("Given altFind", () => {
    const altArray = [3, 75, 5, 6, "macarra", true];
    describe("Receive function", () => {
        test(`Return boolean`, () => {
            const result = altFind(altArray, tryFunct);
            const expected = altArray.find(tryFunct);
            expect(result).toStrictEqual(expected);
        });
    });
});

describe("Given altEvery", () => {
    const altArray = [3, 75, 5, 6, "macarra", true];
    describe("Receive function", () => {
        test(`Return boolean`, () => {
            const result = altEvery(altArray, tryFunct);
            const expected = altArray.every(tryFunct);
            expect(result).toStrictEqual(expected);
        });
    });
});

describe("Given altIncludes", () => {
    const altArray = [3, 75, 5, 6, "macarra", true];
    describe("Receive function", () => {
        test(`Return boolean`, () => {
            const result = altIncludes(altArray, tryFunct);
            const expected = altArray.includes(tryFunct);
            expect(result).toStrictEqual(expected);
        });
    });
});

describe("Given altSome", () => {
    const altArray = [3, 75, 5, 6, "macarra", true];
    describe("Receive function", () => {
        test(`Return boolean`, () => {
            const result = altSome(altArray, tryFunct);
            const expected = altArray.some(tryFunct);
            expect(result).toStrictEqual(expected);
        });
    });
});

describe("Given altpush", () => {
    const altArray = [3, 75, 5, 6, "macarra", true];
    describe("Receive array and value", () => {
        test(`Return index of new value}`, () => {
            const result = altPush(altArray, newValue);
            const expected = 7;
            expect(result).toBe(expected);
        });
    });
});
