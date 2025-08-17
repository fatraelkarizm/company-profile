/*
 * This file contains the common validations for the library.
 */

export const validateEmail = (email: string) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
};

export const validatePassword = (password: string) => {
    return password.length >= 8;
};

export const validatePhoneNumber = (phoneNumber: string) => {
    return phoneNumber.match(/^[0-9]{10}$/);
};