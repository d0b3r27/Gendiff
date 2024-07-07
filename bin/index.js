#!/usr/bin/env node
import gendiff from '../index.js';

console.log(gendiff('./__fixtures__/file3.yml', './__fixtures__/file4.yml', 'plain'));
