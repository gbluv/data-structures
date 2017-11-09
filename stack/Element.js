"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Element = (function () {
    function Element(data, nextElement) {
        this.data = data;
        this.next = nextElement;
    }
    Element.prototype.getData = function () {
        return this.data;
    };
    Element.prototype.setData = function (data) {
        this.data = data;
    };
    Element.prototype.getNext = function () {
        return this.next;
    };
    return Element;
}());
exports.default = Element;
