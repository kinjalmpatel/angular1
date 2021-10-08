import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EMPLOYEE RESUME';
  loginForm=new FormGroup({
    firstName:new FormControl(''),lastName:new FormControl(''),emailId:new FormControl('',Validators.required)
  })
}
