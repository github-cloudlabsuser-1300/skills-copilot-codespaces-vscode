const { expect } = require('chai');
const { calculate } = require('./test');

// test.test.js

describe('calculate', () => {
    it('should return the sum of two numbers when operator is "+"', () => {
        expect(calculate(5, 3, '+')).to.equal(8);
    });

    it('should return the difference of two numbers when operator is "-"', () => {
        expect(calculate(5, 3, '-')).to.equal(2);
    });

    it('should return the product of two numbers when operator is "*"', () => {
        expect(calculate(5, 3, '*')).to.equal(15);
    });

    it('should return the quotient of two numbers when operator is "/"', () => {
        expect(calculate(6, 3, '/')).to.equal(2);
    });

    it('should return an error message when dividing by zero', () => {
        expect(calculate(6, 0, '/')).to.equal('Error: Division by zero is not allowed.');
    });

    it('should return an error message for an invalid operator', () => {
        expect(calculate(5, 3, '%')).to.equal('Error: Invalid operator.');
    });

    it('should handle negative numbers correctly', () => {
        expect(calculate(-5, -3, '+')).to.equal(-8);
        expect(calculate(-5, 3, '-')).to.equal(-8);
        expect(calculate(-5, -3, '*')).to.equal(15);
        expect(calculate(-6, -3, '/')).to.equal(2);
    });

    it('should handle floating-point numbers correctly', () => {
        expect(calculate(5.5, 3.2, '+')).to.be.closeTo(8.7, 0.001);
        expect(calculate(5.5, 3.2, '-')).to.be.closeTo(2.3, 0.001);
        expect(calculate(5.5, 3.2, '*')).to.be.closeTo(17.6, 0.001);
        expect(calculate(5.5, 2.2, '/')).to.be.closeTo(2.5, 0.001);
    });
});