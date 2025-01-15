const utils = require('./utils');

describe('utils functions', () => {
    describe('getAllDelimiters', () => {
        test('should extract a single custom delimiter', () => {
            expect(utils.getAllDelimiters("//;\n1;2;3")).toEqual({ numbers: "1;2;3", delimiters: ";" });
        });

        test('should return original string if no custom delimiter', () => {
            expect(utils.getAllDelimiters("1,2,3")).toEqual({ numbers: "1,2,3", delimiters: [] });
        });

        test('should handle different custom delimiters', () => {
            expect(utils.getAllDelimiters("//|\n4|5|6")).toEqual({ numbers: "4|5|6", delimiters: "|" });
        });

        test('should handle multi-character delimiter', () => {
            expect(utils.getAllDelimiters("//***\n1***2***3")).toEqual({ numbers: "1***2***3", delimiters: "***" });
        });
    });

    describe('replaceDelimitersWithComma', () => {
        test('should replace single delimiter with comma', () => {
            expect(utils.replaceDelimitersWithComma("1;2;3", [';'])).toBe("1,2,3");
        });

        test('should replace multiple delimiters with commas', () => {
            expect(utils.replaceDelimitersWithComma("1;2|3", [';', '|'])).toBe("1,2,3");
        });

        test('should return same string if no delimiters match', () => {
            expect(utils.replaceDelimitersWithComma("1,2,3", [';'])).toBe("1,2,3");
        });

        test('should handle multi-character delimiter', () => {
            expect(utils.replaceDelimitersWithComma("1***2***3", ['***'])).toBe("1,2,3");
        });
    });
});