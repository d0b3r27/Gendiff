import _ from 'lodash';

const isComplex = (node) => {
  if (_.isObject(node)) {
    return '[complex value]';
  }
  if (node === true || node === false || node === null || _.isNumber(node)) {
    return node;
  }
  return `'${node}'`;
};

const plain = (tree) => {
  const iter = (nodes, keyBefore) => {
    const result = nodes.map(({
      key, type, children, value, value1, value2,
    }) => {
      const newProperty = _.trim(`${keyBefore}.${key}`, '.');
      if (type === 'added') {
        return `Property '${newProperty}' was added with value: ${isComplex(value)}`;
      }
      if (type === 'deleted') {
        return `Property '${newProperty}' was removed`;
      }
      if (type === 'changed') {
        return `Property '${newProperty}' was updated. From ${isComplex(value1)} to ${isComplex(value2)}`;
      }
      if (type === 'nested') {
        return `${iter(children, newProperty)}`;
      }
      return '';
    }).filter((node) => node !== '');

    return result.join('\n');
  };
  return iter(tree, '');
};

export default plain;
