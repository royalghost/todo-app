import { Status } from './status.enum';

export class Todo{
	constructor(
		public id: number,
		public description: string,
		public status: Status,
		public deadline: Date
		){}

}
