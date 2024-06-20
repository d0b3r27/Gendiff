// import path from 'path';
// import fs from 'fs';
import gendiff from '../index.js';
// import pars from '../src/parser.js';
// import buildTree from '../src/treeBuilder.js';
// import output from '../src/output.js';

const file1Json = './__fixtures__/file1.json';
const file2Json = './__fixtures__/file2.json';
const file1Yml = './__fixtures__/file1.yml';
const file2Yml = './__fixtures__/file2.yml';
const result = `{
- follow: false 
  host: hexlet.io 
- proxy: 123.234.53.22 
+ timeout: 50 
- timeout: 20
+ verbose: true 
}`;

test('test gendiff', () => {
  expect(gendiff(file1Json, file2Json)).toBe(result);
  expect(gendiff(file1Yml, file2Yml)).toBe(result);
  expect(gendiff(file1Json, file2Yml)).toBe(result);
});
