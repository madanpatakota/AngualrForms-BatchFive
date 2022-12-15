import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveapproach',
  templateUrl: './reactiveapproach.component.html',
  styleUrls: ['./reactiveapproach.component.css']
})
export class ReactiveapproachComponent implements OnInit {

  constructor() { }
  schoolForm : FormGroup;
  ngOnInit(): void {
    this.schoolForm = new FormGroup({
       'schoolNameasdfhvasdfsd' : new FormControl(null)
    })
  }

  evtSubmit(){
    console.log(this.schoolForm);
  }

}
