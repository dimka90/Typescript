"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eliza_1 = require("./eliza");
// creating an instance of Eliza
var Assitant = new eliza_1.default();
console.log(Assitant.createAimodel(process.argv[2]));
