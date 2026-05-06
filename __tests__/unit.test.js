// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('Valid Phone Number 1', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('Valid Phone Number 2', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('Invalid Phone Number 1', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
});

test('Invalid Phone Number 2', () => {
    expect(isPhoneNumber('(123)456-7890')).toBe(false);
});

test('Valid Email 1', () => {
    expect(isEmail('n8lin@ucsd.edu')).toBe(true);
});

test('Valid Email 2', () => {
    expect(isEmail('username@email.com')).toBe(true);
});

test('Invalid Email 1', () => {
    expect(isEmail('invalid-email')).toBe(false);
});

test('Invalid Email 2', () => {
    expect(isEmail('email@')).toBe(false);
});

test('Valid Strong Password 1', () => {
    expect(isStrongPassword('Password123')).toBe(true);
});

test('Valid Strong Password 2', () => {
    expect(isStrongPassword('StrongPass567')).toBe(true);
});

test('Invalid Strong Password 1', () => {
    expect(isStrongPassword('12345')).toBe(false);
});

test('Invalid Strong Password 2', () => {
    expect(isStrongPassword('invalid_password')).toBe(false);
});

test('Valid Date 1', () => {
    expect(isDate('12/31/2000')).toBe(true);
});

test('Valid Date 2', () => {
    expect(isDate('10/14/2005')).toBe(true);
}); 

test('Invalid Date 1', () => {
    expect(isDate('2020/12/31')).toBe(false);
});

test('Invalid Date 2', () => {
    expect(isDate('31/12/2000')).toBe(false);
});

test('Valid Hex Color 1', () => {
    expect(isHexColor('#AABBCC')).toBe(true);
});

test('Valid Hex Color 2', () => {
    expect(isHexColor('123')).toBe(true);
});

test('Invalid Hex Color 1', () => {
    expect(isHexColor('BCDEFG')).toBe(false);
});

test('Invalid Hex Color 2', () => {
    expect(isHexColor('#1234')).toBe(false);
});