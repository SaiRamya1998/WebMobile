// import { Component } from '@angular/core';
// import {DatePickerComponent} from 'ng2-date-picker'; 
import {Component, ViewChild} from '@angular/core';  
import {DatePickerDirective} from 'ng2-date-picker'; 

import { IDayCalendarConfig, DatePickerComponent } from "ng2-date-picker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoapp';

  todoArray=[];
  todo;

  selectedDate;
  dateinFormat;
  datePickerConfig = {
    format: 'MMM DD, YYYY'
  };

  getDate(value){
    console.log('selected date..', value.inputElementValue);
    this.dateinFormat = value.inputElementValue;
    // var date = new Date(this.selectedDate * 1000);
  }

  addTodo(value){
    if(value!==""){
      this.todoArray.push(value)
      //console.log(this.todos)
    }else{
      alert('Field required **')
    }

  }

  /*delete item*/
  deleteItem(todo){
    for(let i=0 ;i<= this.todoArray.length ;i++){
      if(todo== this.todoArray[i]){
        this.todoArray.splice(i,1)
      }
    }
  }

  // submit Form
  todoSubmit(value:any){
    if(value!==""){
      this.todoArray.push(value.todo)
      //this.todoForm.reset()
    }else{
      alert('Field required **')
    }

  }
}
