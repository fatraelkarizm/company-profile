/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * This file contains the middleware for the library.
 */

import { NextRequest, NextResponse } from "next/server";

export const middleware = (req: NextRequest) => {
    return NextResponse.next();
};