import fibonachi from "../index.js";

describe(
    "fibonachi function",
    () => {
        test(
            "it should return the correct Fibonacci sequence",
            () => {
                expect(fibonachi(0)).toEqual([]);
                expect(fibonachi(1)).toEqual([1]);
                expect(fibonachi(2)).toEqual([
                    1, 1
                ]);
                expect(fibonachi(5)).toEqual([
                    1, 1, 2, 3, 5
                ]);
                expect(fibonachi(8)).toEqual([
                    1, 1, 2, 3, 5, 8, 13, 21
                ]);
            }
        );

        test(
            "it should handle edge cases",
            () => {
                expect(fibonachi(10)).toEqual([
                    1, 1, 2, 3, 5, 8, 13, 21, 34, 55
                ]);
            }
        );
    }
);
