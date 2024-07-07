import _ from 'lodash';

const isComplex = (node) => {
  if (_.isObject(node)) {
    return '[complex value]';
  }
  if (node === true || node === false || node === null) {
    return node;
  }
  return `'${node}'`;
};

const plain = (tree) => {
  const iter = (nodes, key) => {
    const result = nodes.map((node) => {
      const newProperty = _.trim(`${key}.${node.key}`, '.');
      if (node.type === 'added') {
        return `Property '${newProperty}' was added with value: ${isComplex(node.value)}`;
      }
      if (node.type === 'deleted') {
        return `Property '${newProperty}' was removed`;
      }
      if (node.type === 'changed') {
        return `Property '${newProperty}' was updated. From ${isComplex(node.value1)} to ${isComplex(node.value2)}`;
      }
      if (node.type === 'nested') {
        return `${iter(node.children, newProperty)}`;
      }
      return '';
    }).filter((node) => node !== '');

    return result.join('\n');
  };
  return iter(tree, '');
};

export default plain;
