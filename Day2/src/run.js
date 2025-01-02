"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var eliza_1 = require("../eliza");
var thread_1 = require("./thread");
// creating an instance of Eliza
var Assitant = new eliza_1.default();
console.log(Assitant.createAimodel(process.argv[2]));
var thread = thread_1.default.createThread();
thread.creatConversation(" am a robot");
thread.creatConversation(" i am doing great");
console.log(thread.getConversations());
