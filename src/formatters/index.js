import stylish from './stylish.js';
import plain from './plain.js';

export default (tree, formatName) => {
  switch (formatName) {
    case 'plain':
      return plain(tree);
    default:
      return stylish(tree);
  }
};
