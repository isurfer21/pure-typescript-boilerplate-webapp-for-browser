define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Cyborg = /** @class */ (function () {
        function Cyborg(cid) {
            this.id = cid;
        }
        Cyborg.prototype.init = function () {
            console.log('Cyborg init', this.id);
        };
        return Cyborg;
    }());
    exports.Cyborg = Cyborg;
});
