/*
 * This file contains the services for the library.
 */

import { get } from "../lib/http";

export const getUsers = async () => {
    const response = await get("https://jsonplaceholder.typicode.com/users");
    return response;
};