import { isSafeInteger } from "./isInteger";

export const isAtleast18 = (value: any) => isSafeInteger(value) && value >= 18
