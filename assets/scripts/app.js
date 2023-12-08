import { apikey } from "./util.js";
// mention the variable name that is being imported and from which file it is being imported

console.log(apikey);

// during the build process all the export and import files
// would be mearged into single big file or bunch of big files.

import def from "./util.js";
// can use any name to refer to the exported data.
console.log(def);

import { a, b } from "./util.js";
// importing multiple variables
console.log(a + b);

import * as object from "./util.js";
// grouping as an JS object
console.log(object.a);
console.log(object.b);

import { a as A } from "./util.js";
// renaming a to A
console.log(A);
