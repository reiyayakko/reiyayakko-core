
import { isNumber } from "number/is/number";
import { isFunction } from "../is/function";
import type { Comparator, ComparatorResult } from "./types";

const comparatorRsltToBool = (rslt: ComparatorResult): boolean => (
    isNumber(rslt) ? rslt < 0
    : rslt === "<" ? true
    : rslt === ">" ? false
    : Boolean(rslt)
);

/**
 * Compare values with comparator and returns boolean value.
 *
 * @param left value to compare on left.
 * @param right value to compare on right.
 * @param comparator comparison function or boolean value, true if less than, false if greater than.
 */
export const compare = <T>(left: T, right: T, comparator: Comparator<T>=true): boolean => (
    isFunction(comparator) ? comparatorRsltToBool(comparator(left, right))
    : comparator === "<" ? left < right
    : comparator === "<=" ? left <= right
    : comparator === ">" ? left > right
    : comparator === ">=" ? left >= right
    : comparator ? left < right : left > right
);
