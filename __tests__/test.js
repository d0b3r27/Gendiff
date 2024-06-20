// import path from 'path';
// import fs from 'fs';
import gendiff from '../index.js';
// import pars from '../src/parser.js';
// import buildTree from '../src/treeBuilder.js';
// import output from '../src/output.js';

const file1 = './__fixtures__/file1.json';
const file2 = './__fixtures__/file2.json';
const result = `{
- follow: false 
  host: hexlet.io 
- proxy: 123.234.53.22 
+ timeout: 50 
- timeout: 20
+ verbose: true 
}`;

test('test gendiff', () => {
  expect(gendiff(file1, file2)).toBe(result);
});
