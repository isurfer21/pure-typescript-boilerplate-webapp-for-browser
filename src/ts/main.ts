import { Cyborg } from "./modules/cyborg";
import { Human } from "./modules/human";

class Main {
	private human: Human;
	private cyborg: Cyborg;
	constructor() {
		this.human = new Human("Adam");
		this.cyborg = new Cyborg(786);
	}
	init() {
		this.human.init();
		this.cyborg.init();
	}
}

var main = new Main();
main.init();