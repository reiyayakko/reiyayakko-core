
import { random } from "number/random/random";
import { toBaseN } from "number/util/basen";
import { MAX_BIT_NUMBER } from "number/util/constant";

/**
 * Generates a random string of lowercase alphabet and number.
 *
 * @param length length of string to generate.
 */
export const randStr = (length?: number): string => {
    const len = length! < MAX_BIT_NUMBER ? Math.abs(length!) | 0 : 8;

    let result = "";
    do result += toBaseN(random(916132832) | 0, 62);
    while(result.length <= len);
    return result.slice(-len);
};
