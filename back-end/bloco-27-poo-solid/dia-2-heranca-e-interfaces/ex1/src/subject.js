"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject = /** @class */ (function () {
    function Subject(name) {
        this.validateName(name);
        this._name = name;
    }
    Object.defineProperty(Subject.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this.validateName(value);
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype.validateName = function (value) {
        if (value.length < 3) {
            throw new Error('O nome tem que possuir no mínimo 3 caracteres');
        }
    };
    return Subject;
}());
// const math = new Subject('Matemática');
// const story = new Subject('História');
// const philosophy = new Subject('Filosofia');
// console.log(math);
// console.log(story);
// console.log(philosophy);
// const invalidSubjectName = new Subject('Po');
exports.default = Subject;
