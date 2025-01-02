"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Thread = /** @class */ (function () {
    function Thread() {
        this.conversation = [];
    }
    Thread.createThread = function () {
        return new Thread();
    };
    Thread.prototype.creatConversation = function (statement) {
        this.conversation.push({ question: statement, response: " " });
    };
    Thread.prototype.getConversations = function () {
        return this.conversation;
    };
    return Thread;
}());
exports.default = Thread;
