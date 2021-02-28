
export type ComparatorFunction<T=unknown, U=number> = (left: T, right: T) => U;
export type ComparatorResult = number | boolean | null | "<" | ">";

export type CompareHint = boolean | "<" | "<=" | ">" | ">=";
export type Comparator<T> = CompareHint | ComparatorFunction<T, ComparatorResult>;
