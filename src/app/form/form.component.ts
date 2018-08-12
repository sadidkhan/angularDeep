import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Observable, of } from 'rxjs';

import { FormService } from '../form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  myForm: FormGroup;
  
    constructor(
      private fb: FormBuilder,
      private formService: FormService
    ) {}
  
    ngOnInit() {
      this.myForm = this.fb.group({
        // name: ['', Validators.required],
        // email: [
        //   '',
        //   [Validators.required, Validators.email],
        //   this.validateEmailNotTaken.bind(this)
        // ]
        Type: ['', Validators.required],
        Date: ['', Validators.required],
        Location: ['', Validators.required],
        Quantity: ['', Validators.required],
        Status: ['', Validators.required],
        Description: [''],
        
      });
    }
  
    validateEmailNotTaken(control: AbstractControl) {
      return this.formService.checkEmailNotTaken(control.value).subscribe(res => {
        console.log("res");
        return of(res ? null : { emailTaken: true });
      });
    }

    save(){
      console.log(this.myForm.getRawValue());
      console.log(this.myForm.value);
    }
}