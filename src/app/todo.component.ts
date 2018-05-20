import { Component, Inject } from '@angular/core';
import { Todo } from './todo';
import { Status } from './status.enum';
import { TODOS } from './mock-todos';

import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'todo-root',
  templateUrl: './todo.component.html'
})
export class AppComponent {
  title = 'Todo App';
	todosLst = TODOS;
  newTodo: Todo;
  selectedTodo: Todo;

  constructor(
  	public dialog: MatDialog,
  	) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverview, {
      width: '400px',
      height: '400px',
      data: { todo: this.newTodo  }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed : ${result}`);
      if (result != null && result.description != null){
        if (result.deadline == null){
          console.log('If deadline is not selected set for tomorrow');
          let tomorrow = new Date();
          tomorrow.setDate(new Date().getDate() + 1 );
          result.deadline = tomorrow;
        }
        console.log(`Inside condition ${result}`);
        result.id = this.todosLst.length + 1;
        this.todosLst.push(result);
      }
    });

  }

  onSelect(todo: Todo): void{
    this.selectedTodo = todo;
    console.log(`The selected todo items is : ${todo.id}`);
  }
}

@Component({
  selector: 'todo-dialog-new',
  templateUrl: './todo-dialog-new.html',
})
export class DialogOverview {

  constructor(
    public dialogRef: MatDialogRef<DialogOverview>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
