define("modules/cyborg", ["require", "exports"], function (require, exports) {
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
define("modules/human", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Human = /** @class */ (function () {
        function Human(hname) {
            this.name = hname;
        }
        Human.prototype.init = function () {
            console.log('Human init', this.name);
        };
        return Human;
    }());
    exports.Human = Human;
});
define("main", ["require", "exports", "modules/cyborg", "modules/human"], function (require, exports, cyborg_1, human_1) {
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
