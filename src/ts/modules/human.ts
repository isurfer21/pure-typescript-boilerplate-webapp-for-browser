export class Human {
	private name: string;
	constructor(hname: string) {
		this.name = hname;
	}
	public init() {
		console.log('Human init', this.name);
	}
}