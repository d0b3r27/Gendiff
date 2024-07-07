import _ from 'lodash';

const replacer = '  ';
const currentIndent = (depth) => replacer.repeat(depth);
const bracketIndent = (depth) => replacer.repeat(depth - 1);

const stringify = (value, resDepth) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) {
      return `${currentValue}`;
    }

    const lines = Object.entries(currentValue).map(
      ([key, val]) => `      ${currentIndent(depth)}${key}: ${iter(val, depth + 2)}`,
    );

    return ['{', ...lines, `${bracketIndent(depth)}    }`].join('\n');
  };

  return iter(value, resDepth);
};

const stylish = (tree) => {
  const iter = (nodes, depth) => {
    const result = nodes.map((node) => {
      if (node.type === 'nested') {
        return `  ${currentIndent(depth)}${node.key}: ${iter(node.children, depth + 2)}`;
      }
      if (node.type === 'deleted') {
        return `${currentIndent(depth)}- ${node.key}: ${stringify(node.value, depth)}`;
      }
      if (node.type === 'added') {
        return `${currentIndent(depth)}+ ${node.key}: ${stringify(node.value, depth)}`;
      }
      if (node.type === 'changed') {
        return `${currentIndent(depth)}- ${node.key}: ${stringify(node.value1, depth)}\n${currentIndent(depth)}+ ${node.key}: ${stringify(node.value2, depth)}`;
      }
      return `  ${currentIndent(depth)}${node.key}: ${stringify(node.value, depth)}`;
    });
    return ['{', ...result, `${bracketIndent(depth)}}`].join('\n');
  };
  return iter(tree, 1);
};

export default stylish;
