define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Human = /** @class */ (function () {
        function Human(hname) {
            this.name = hname;
        }
        Human.prototype.init = function () {
            console.log('Human init', this.name);
            document.body.innerHTML += '<p>' + this.name + ' is human.</p>';
        };
        return Human;
    }());
    exports.Human = Human;
});
//# sourceMappingURL=human.js.map