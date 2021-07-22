import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITodoTaskRow } from '../models';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css'],
})

export class TodoCardComponent implements OnInit {
  @Input () rowData: ITodoTaskRow | any;
  @Output() confirm: EventEmitter<any> = new EventEmitter<any>();
  @Output() remove: EventEmitter<any> = new EventEmitter<any>();

  newRowForm: FormGroup | any;
  date = new Date();
  isHidden= true;

  constructor(
    private formBuilder: FormBuilder,
    ) {
      this.newRowForm = this.formBuilder.group({
        isAdd: [''],
        name: [''],
        taskName: [''],
        description: [''],
        dueDate: ['']
      });
     }

  get forNewRowForm(): any { return this.newRowForm.controls; }
  
  ngOnInit(): void {
  }
  
    confirmTask(): void {
      
      this.confirm.emit(this.newRowForm.value);
    }
       
    removeTask(ev: any): void {
      this.remove.emit(ev);
    }
}
 

