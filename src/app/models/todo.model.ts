export class TodoModel {
	title: string;
	completed: boolean;
	id: number;

	constructor(title: string) {
		this.title = title;
		this.id = Date.now();
		this.completed = false;
	}
}