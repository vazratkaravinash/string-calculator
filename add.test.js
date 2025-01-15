const add = require('./add.js');
describe('String Calculator Add', () => {
    test('should return 0 for an empty string', () => {
        expect(add("")) .toBe(0);
    });

    test('should return the number itself for a single number', () => {
        expect(add("1")).toBe(1);
    });

    test('should return sum for two numbers separated by a comma', () => {
        expect(add("1,5")).toBe(6);
    });

    test('should handle newlines between numbers', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test('should handle custom delimiter', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    test('should throw error for negative numbers', () => {
        expect(() => add("1,-2,3,-4")).toThrow("Negative numbers not allowed: -2, -4");
    });

    test('should handle multiple custom delimiters (if supported)', () => {
        expect(add("//|\n1|2|3")).toBe(6);
    });

    test('should handle large number of inputs', () => {
        expect(add("1,2,3,4,5,6,7,8,9,10")).toBe(55);
    });
});