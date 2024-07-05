import fs from 'fs';
import gendiff from '../index.js';

const file1Json = './__fixtures__/file3.json';
const file2Json = './__fixtures__/file4.json';
const file1Yml = './__fixtures__/file3.yml';
const file2Yml = './__fixtures__/file4.yml';
const resultStylish = './__fixtures__/resultStylish';
const result = fs.readFileSync(
  resultStylish,
  'utf8',
);

test('test gendiff', () => {
  expect(gendiff(file1Json, file2Json)).toBe(result);
  expect(gendiff(file1Yml, file2Yml)).toBe(result);
  expect(gendiff(file1Json, file2Yml)).toBe(result);
});
