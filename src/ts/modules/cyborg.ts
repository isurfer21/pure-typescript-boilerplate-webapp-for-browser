export class Cyborg {
	private id: number;
	constructor(cid: number) {
		this.id = cid;
	}
	public init() {
		console.log('Cyborg init', this.id);
	}
}