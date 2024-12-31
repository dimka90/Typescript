"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Dimka",
    age: 90
};
var name = user.name;
console.log("".concat(user.name, " ").concat(name));
function getname(user) {
    return user.name;
}
console.log(getname(user));
exports.default = user;
