import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})


export class TodoCardComponent implements OnInit {

  title = "ToDo cards";
  description = "Learn Angular";
  dueDate = 2022;

  ngOnInit(): void {
    
  }
 

}
