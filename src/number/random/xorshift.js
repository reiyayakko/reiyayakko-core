
// @ts-check

import { assertType } from "../../utility/condition/assert-type.js";
import { isNumber } from "../../util/is/number/number.js";
import { density } from "./density.js";

let seedCache = 0xf0f0f0f0;

/*
xorshiftアルゴリズムを使用して整数の疑似乱数を生成します。
出力される数値の上限は`2147483647(2^31-1)`です。
この関数をセキュリティ目的で使用しないでください。
*/

/**
 * Generates an integer pseudo-random number using the xorshift algorithm.
 *
 * The upper limit of the output value is `2147483647(2^31-1)`.
 *
 * Do not use this function for security purposes!!
 * @param {number} min
 * @param {number} max
 * @param {number} [seed]
 */
export const xorshift = (min=0, max=Infinity, seed) => {
    assertType(min, Number.isFinite);
    assertType(max, isNumber);
    if(min > max) [min, max] = [max, min];
    if(min === max) return min;
    let number = isNumber(seed) ? seed : seedCache;
    number ^= number << 13;
    number ^= number >> 17;
    number ^= number << 15;
    const _ = density(Math.abs(seedCache = number), max - min, 0x80000000);
    return Math.floor(_ + min + 0.5);
};