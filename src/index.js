import path from 'path';
import fs from 'fs';
import pars from './parser.js';
import buildTree from './treeBuilder.js';
import stylish from './stylish.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const extractFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => pars(fs.readFileSync(filepath, ('utf-8')), extractFormat(filepath));

const gendiff = (filepath1, filepath2) => {
  const fullFilePath1 = getFullPath(filepath1);
  const fullFilePath2 = getFullPath(filepath2);

  const data1 = getData(fullFilePath1);
  const data2 = getData(fullFilePath2);
  // console.log('data1', data1);
  // console.log('data2', data2);

  const tree = buildTree(data1, data2);
  console.log('result', tree);
  console.log('children', tree[0]);
  // return output(tree);
  console.log(stylish(tree));
};

export default gendiff;
