define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Cyborg = /** @class */ (function () {
        function Cyborg(cid) {
            this.id = cid;
        }
        Cyborg.prototype.init = function () {
            console.log('Cyborg init', this.id);
            document.body.innerHTML += '<p>' + this.id + ' is cyborg.</p>';
        };
        return Cyborg;
    }());
    exports.Cyborg = Cyborg;
});
//# sourceMappingURL=cyborg.js.map