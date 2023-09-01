import 'react-native';

// Note: import explicitly to use the types shiped with jest.
import {it, expect} from '@jest/globals';

const isEmailValid = (email: string) => {
  let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,20}$/;
  return reg.test(email);
};

it('should return true for a valid email', () => {
  const validEmails = [
    'test@example.com',
    'user123@gmail.com',
    'john.doe@example.co.uk',
  ];

  validEmails.forEach(email => {
    expect(isEmailValid(email)).toBe(true);
  });
});

it('should return false for an invalid email', () => {
  const invalidEmails = [
    'invalid',
    'user@',
    '@example.com',
    'user@example',
    'user@.com',
  ];

  invalidEmails.forEach(email => {
    expect(isEmailValid(email)).toBe(false);
  });
});
