const stylish = (tree) => {
  const result = tree.map((node) => {
    if (node.type === 'nested') {
      return `  ${node.key}: ${stylish(node.children)}`;
    }
    if (node.type === 'deleted') {
      return `- ${node.key}: ${node.value}\n`;
    }
    if (node.type === 'added') {
      return `+ ${node.key}: ${node.value}\n`;
    }
    if (node.type === 'changed') {
      return `- ${node.key}: ${node.value1}\n+ ${node.key}: ${node.value2}\n`;
    }
    return `  ${node.key}: ${node.value}\n`;
  }).join('');
  return `{\n${result}}\n`;
};

export default stylish;
