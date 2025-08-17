/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * This file contains the HTTP utilities for the library.
 */

export const get = async (url: string) => {
    const response = await fetch(url);
    return response.json();
};

export const post = async (url: string, data: any) => {
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
    });
    return response.json();
};

export const put = async (url: string, data: any) => {
    const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
    });
    return response.json();
};
