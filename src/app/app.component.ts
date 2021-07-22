import { Component } from '@angular/core';
import { ITodoTaskRow } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  todoTaskRow: Array<ITodoTaskRow> = []; 
  title = 'epam-angular-course-app';
  ngOnInit(): void {
  }
  createTask():void {
    this.todoTaskRow.unshift({
      isAdd: true,
      name: 'add',
      taskName: 'add',
      description: 'add',
      dueDate: '01.01.2021',
    })
    }
    addTask(task: any): void {
      this.todoTaskRow.forEach(item => {
        item.isAdd = false;
      })
      this.todoTaskRow.push(task);
    }
  }

