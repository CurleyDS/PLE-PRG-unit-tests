import { describe, expect, it } from 'vitest';

// test('1 + 1', () => {
//     expect(1 + 1).toBe(2);
// });

// describe('Math operations', () => {
//     it('should add numbers correctly', () => {
//         expect(1 + 1).toBe(2);
//     });

//     it('should subtract numbers correctly', () => {
//         expect(5 - 2).toBe(3);
//     });
// });

import { sum, subtract } from '../js/math.js';

describe('The Sum function', () => {
    it('testing sum with 2 arguments, positive numbers', () => {
        expect(sum(1, 4)).toBe(5);
    });
    it('testing sum with 2 arguments, negative numbers', () => {
        expect(sum(1, -4)).toBe(-3);
    });

    it('testing substraction with 2 arguments', () => {
        expect(subtract(5, 4)).toBe(1);
    });

    it('testing substraction with 3 arguments', () => {
        expect(subtract(1, 4, 5)).toBe(-8);
    });
});