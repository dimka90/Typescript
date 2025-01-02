"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Eliza = /** @class */ (function () {
    function Eliza() {
    }
    Eliza.prototype.createAimodel = function (modelType) {
        if (modelType === "openai" || modelType === "grok" || modelType === "claude") {
            this.aiModel = modelType;
            return this.aiModel;
        }
        throw new Error("Model type must be one of [openai | grok | claude]   but got" + modelType);
    };
    return Eliza;
}());
exports.default = Eliza;
