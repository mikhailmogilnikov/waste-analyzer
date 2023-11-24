const formatVault = ['ФМУ76', 'М11'];

const getFormat = (filename) => {
  const normalize = filename.replace(/[\s-_]/g, '').toUpperCase();
  const result = formatVault.filter((format) => normalize.startsWith(format));
  return result.length === 1 ? result[0] : null;
};

const isClassified = (filename) => getFormat(filename) !== null;

export { getFormat, isClassified };
