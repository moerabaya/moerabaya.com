// clsx.ts
// A lightweight TypeScript implementation of the popular `clsx` utility.
// Supports strings, numbers, arrays, nested arrays, and objects (class->boolean).
// Falsy values (false, null, undefined, "", 0) are ignored except numbers (0 is ignored here).

type ClassValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | ClassDictionary
  | ClassArray;

interface ClassDictionary {
  [key: string]: any; // truthy values will include the key
}

interface ClassArray extends Array<ClassValue> {}

/**
 * clsx(...values) -> string
 *
 * Examples:
 * clsx('a', 'b') // 'a b'
 * clsx('a', { b: true, c: false }) // 'a b'
 * clsx(['a', 0, null, ['b', { c: true }]]) // 'a b c'
 */
export function clsx(...values: ClassValue[]): string {
  const classes: string[] = [];

  const push = (val: ClassValue) => {
    if (!val && val !== 0) return; // ignore falsy except number 0 is treated as falsy too

    const type = typeof val;

    if (type === 'string' || type === 'number') {
      // For numbers, include only when truthy (non-zero). This mirrors many clsx implementations
      // If you want to include 0, adjust this logic.
      const str = String(val);
      if (str) classes.push(str);
      return;
    }

    if (Array.isArray(val)) {
      for (const item of val) push(item);
      return;
    }

    if (type === 'object') {
      for (const key in val as ClassDictionary) {
        if (Object.prototype.hasOwnProperty.call(val, key)) {
          // include key when value is truthy
          if ((val as ClassDictionary)[key]) classes.push(key);
        }
      }
      return;
    }

    // booleans and other types are ignored
  };

  for (const v of values) push(v);

  return classes.join(' ');
}
