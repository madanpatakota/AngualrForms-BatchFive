import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngualrForms-BatchFive';




  // Here i am getting form element
  // but i want the type of the form i mean 
  // i want to know form related status
  // i mean i want to know each status of the control
  evtSubmit(form:NgForm){

    console.log(form);
  }


}
