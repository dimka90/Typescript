"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Thread = /** @class */ (function () {
    function Thread(modeltype) {
        this.conversation = [];
        this.modeltype = modeltype;
    }
    Thread.createThread = function (modelType) {
        return new Thread(modelType);
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
