import path from "path";
import fs from "fs";
import pars from "./parser.js";
// import treeBuilder from "./treeBuilder.js";

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const extractFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => pars(fs.readFileSync(filepath, ('utf-8')), extractFormat(filepath));

const gendiff = (filepath1, filepath2) => {
  const fullFilePath1 = getFullPath(filepath1);
  const fullFilePath2 = getFullPath(filepath2);
  
  const data1 = getData(fullFilePath1);
  const data2 = getData(fullFilePath2);
  console.log(data1, data2);
};
export default gendiff;