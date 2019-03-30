export class Cyborg {
	private id: number;
	constructor(cid: number) {
		this.id = cid;
	}
	public init() {
		console.log('Cyborg init', this.id);
		document.body.innerHTML += '<p>' + this.id + ' is cyborg.</p>';
	}
}