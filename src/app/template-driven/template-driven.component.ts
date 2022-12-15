import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent{
  title = 'AngualrForms-BatchFive';
  // Here i am getting form element
  // but i want the type of the form i mean 
  // i want to know form related status
  // i mean i want to know each status of the control
  evtSubmit(form:NgForm){
    console.log(form);
  }

}
