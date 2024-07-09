import fs from 'fs';
import gendiff from '../index.js';

const file1Json = './__fixtures__/file1.json';
const file2Json = './__fixtures__/file2.json';
const file1Yml = './__fixtures__/file1.yml';
const file2Yml = './__fixtures__/file2.yml';
const resultStylish = fs.readFileSync(
  './__fixtures__/resultStylish.txt',
  'utf8',
);
const resultFlat = fs.readFileSync(
  './__fixtures__/resultFlat.txt',
  'utf8',
);
const resultJson = fs.readFileSync(
  './__fixtures__/resultJson.json',
  'utf8',
);

test('test gendiff stylish', () => {
  expect(gendiff(file1Json, file2Json, 'stylish')).toBe(resultStylish);
  expect(gendiff(file1Yml, file2Yml, 'stylish')).toBe(resultStylish);
  expect(gendiff(file1Json, file2Yml, 'stylish')).toBe(resultStylish);
});

test('test gendiff plain', () => {
  expect(gendiff(file1Json, file2Json, 'plain')).toBe(resultFlat);
  expect(gendiff(file1Yml, file2Yml, 'plain')).toBe(resultFlat);
  expect(gendiff(file1Json, file2Yml, 'plain')).toBe(resultFlat);
});

test('test gendiff json', () => {
  expect(gendiff(file1Json, file2Json, 'json')).toBe(resultJson);
  expect(gendiff(file1Yml, file2Yml, 'json')).toBe(resultJson);
  expect(gendiff(file1Json, file2Yml, 'json')).toBe(resultJson);
});
