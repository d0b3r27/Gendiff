const stylish = (tree) => {
  const iter = (nodes, depth) => {
    const replacer = '  ';
    const currentIndent = replacer.repeat(depth);
    const bracketIndent = replacer.repeat(depth - 1);
    const result = nodes.map((node) => {
      if (node.type === 'nested') {
        return `${currentIndent}${node.key}: ${iter(node.children, depth + 1)}`;
      }
      if (node.type === 'deleted') {
        return `${currentIndent}- ${node.key}: ${node.value}\n`;
      }
      if (node.type === 'added') {
        return `${currentIndent}+ ${node.key}: ${node.value}\n`;
      }
      if (node.type === 'changed') {
        return `${currentIndent}- ${node.key}: ${node.value1}\n${currentIndent}+ ${node.key}: ${node.value2}\n`;
      }
      return `${currentIndent}${node.key}: ${node.value}\n`;
    }).join('');
    return `{\n${result}${bracketIndent}}\n`;
  };
  return iter(tree, 1);
};

export default stylish;
