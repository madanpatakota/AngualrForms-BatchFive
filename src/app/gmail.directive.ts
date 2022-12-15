import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, Validators } from "@angular/forms"


// we are telling to the angualr once your code is ready
// take GmailValidator class part of the NG_Validators 
// and register the
// GmailValidator into the validators section.
//*for this you have to create the the your ID.

//[required , minlengt , maxlength ,GmailValidator ]
@Directive({
  selector  : '[ngGmailValidtor][ngModel]',
  providers : [{
    provide : NG_VALIDATORS,
    useExisting : GmailValidator,
    multi : true
  }]
})

export class GmailValidator implements Validator {
  validate(control:any) : { [key:  string]     : boolean } | null {
  //                      { "isNotValidDomain" : true }
    //abc@tcs.com
    //abc@xyz.com
    //abc@gmail.com
     let value:string = control.value;
     if(value){
         let emailValue = value.split("@");   
         // ["abc", "tcs.com"];
          if(emailValue[1] != "gmail.com"){
            return {
               "isNotGmailDomain" : true
            }
          }
     }
     return null;


    /*
            we are going to take the textbox value
            and check that textbox value contains gmail domain or not
    */


  }
  


}