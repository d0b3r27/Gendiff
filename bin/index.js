#!/usr/bin/env node
import gendiff from '../index.js';

console.log(gendiff('./__fixtures__/file1.json', './__fixtures__/file2.json', 'plain'));
