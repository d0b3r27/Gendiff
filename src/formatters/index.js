import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

export default (tree, formatName) => {
  switch (formatName) {
    case 'plain':
      return plain(tree);
    case 'json':
      return json(tree);
    default:
      return stylish(tree);
  }
};
