const flatObject = obj =>
  Object.keys(obj).reduce((newObj, key) => ({ ...newObj, ...obj[key] }), {});

module.exports = { flatObject };
