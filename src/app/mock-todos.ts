import { Todo } from './todo';
import { Status } from './status.enum';

export const TODOS:	Todo[]	= [
		new Todo(1, 'Buy grocery', Status.NEW, new Date()),
		new Todo(2, 'Clean House', Status.NEW, new Date()),
		new Todo(3, 'Check Mailbox', Status.NEW, new Date()),
		new Todo(4, 'Do Laundary', Status.NEW, new Date()),
		new Todo(5, 'Water Plant', Status.NEW, new Date()),
	];