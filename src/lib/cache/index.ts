const memoize = new Map();

const save = (key: string, data: any): void => {
  if (!memoize.has(key)) memoize.set(key, data);
};

const get = (key: string): any => {
  return memoize.get(key);
};

const has = (key: string): boolean => memoize.has(key);

export default { save, get, has };
