
export type Path = PropertyKey | PropertyKey[];

const { hasOwnProperty } = Object.prototype;

/**
 *
 * @param obj
 * @param path
 * @param flags bit mask options
 * - 1: Don't search for prototype chain.
 * - 2: nothing yet for now
 * - 4: same as above
 */
export const get = (obj: object, path: PropertyKey[], flags=0): any => {
    const depthLimit = path.length;
    let depth = 0;
    while(obj != null && depth < depthLimit) {
        const key = path[depth++];
        const hasProp = flags & 1 ? hasOwnProperty.call(obj, key) : key in obj;
        if(!hasProp) return void 0;
        obj = obj[key];
    }
    return obj;
};

export const parseStringPath = (input: string): string[] => {
    const path = [];
    let current = "";
    for(let i = 0;i < input.length;i++) {
        const char = input[i];
        switch(char) {
        case ".":
            path.push(current);
            current = "";
            break;
        case "\\":
            current += input[++i];
            break;
        default:
            current += char;
            break;
        }
    }
    path.push(current);
    return path;
};
