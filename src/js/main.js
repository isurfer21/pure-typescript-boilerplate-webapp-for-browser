define(["require", "exports", "./modules/cyborg", "./modules/human"], function (require, exports, cyborg_1, human_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Main = /** @class */ (function () {
        function Main() {
            this.human = new human_1.Human("Adam");
            this.cyborg = new cyborg_1.Cyborg(786);
        }
        Main.prototype.init = function () {
            this.human.init();
            this.cyborg.init();
        };
        return Main;
    }());
    var main = new Main();
    main.init();
});
