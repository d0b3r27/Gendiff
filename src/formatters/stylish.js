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
    const result = nodes.map(({
      key, type, children, value, value1, value2,
    }) => {
      if (type === 'nested') {
        return `  ${currentIndent(depth)}${key}: ${iter(children, depth + 2)}`;
      }
      if (type === 'deleted') {
        return `${currentIndent(depth)}- ${key}: ${stringify(value, depth)}`;
      }
      if (type === 'added') {
        return `${currentIndent(depth)}+ ${key}: ${stringify(value, depth)}`;
      }
      if (type === 'changed') {
        return `${currentIndent(depth)}- ${key}: ${stringify(value1, depth)}\n${currentIndent(depth)}+ ${key}: ${stringify(value2, depth)}`;
      }
      return `  ${currentIndent(depth)}${key}: ${stringify(value, depth)}`;
    });
    return ['{', ...result, `${bracketIndent(depth)}}`].join('\n');
  };
  return iter(tree, 1);
};

export default stylish;
