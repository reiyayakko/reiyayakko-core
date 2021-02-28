
import { compare, Comparator } from "util/compare";
import { isArrayLike } from "../is/array-like";

/*
比較関数の結果として期待される値。
指定しない場合、最初の結果が指定されます。
*/

/**
 * @param arrayLike
 * @param comparator
 * @param direction The value expected as the result of the comparison function.
 * If not specified, the first result is specified.
 */
export const isSorted = <T>(
    arrayLike: ArrayLike<T>,
    comparator: Comparator<T>,
    direction?: boolean,
): boolean => {
    if(!isArrayLike(arrayLike))
        return false;

    const len = arrayLike.length;
    if(len < (direction == null ? 3 : 2))
        return true;

    let prev = arrayLike[0];
    let result: boolean;
    let i = 1;
    if(direction == null) {
        direction = compare(prev, prev = arrayLike[i++], comparator);
    }

    do result = compare(prev, prev = arrayLike[i], comparator);
    while(direction === result && ++i < len);

    return i === len;
};
