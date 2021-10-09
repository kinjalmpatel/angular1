import { Component, OnInit } from '@angular/core';
import { FormBuilder, EmailValidator, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee, Experience } from '../employee';
import { EmployeeService } from '../employee.service';
//import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  [x: string]: any;
  registerForm: FormGroup;
  submitted = false;
  employee: Employee = new Employee();
  employeeExp: Array<Experience> = new Array<Experience>();
  constructor(private employeeService: EmployeeService,
    private router: Router, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    const empexp = new Experience();
    this.employeeExp.push(empexp);
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^.+\..+$/)]]
    });
  }
  addRow(exp: Experience) {
    // this.employee11 = { company_name: "", experience_in_years: "", position: "" };
    exp.isEdit = true;
    const empexp = new Experience();
    this.employeeExp.push(empexp);
    // this.toastr.success('New row added successfully', 'New Row');

    console.log(this.employeeExp);
    return true;
  }


  deleteRow(index: number) {
    if (this.employeeExp.length == 1) {
      //this.toastr.error("Can't delete the row when there is only one row", 'Warning');
      return false;
    } else {
      this.employeeExp.splice(index, 1);
      //  this.toastr.warning('Row deleted successfully', 'Delete row');
      return true;
    }
  }

  //employee: Employee = new Employee();
  saveEmployee() {
    const blanckemp = this.employeeExp.find(x => !x.isEdit);
    if (blanckemp) {
      this.employeeExp.splice(this.employeeExp.length - 1, 1);
    }
    this.employee.experience = this.employeeExp;
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      // this.saveExprience();
      this.gotoEmployeeList();
    },
      error => console.log(error));
  }

  editRow(exp: Experience) {
    this.employeeExp.find(x => x.eid = exp.eid);
  }
  saveExprience() {

    this.employeeService.createExperience(this.employeeExp).subscribe(data => {
      console.log(data);
      this.gotoEmployeeList();
    },
      error => console.log(error));
  }
  gotoEmployeeList() {
    this.router.navigate(['/employees']);
  }
  onsubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
     
      alert('Please Fill All The Data Properly\n\n');
      return;
    }
else{
  alert('SUCCESS!! :-)\n\n' );

}
    console.log(this.employee);
    this.saveEmployee();
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}




function validateEmail(email: any) {
  throw new Error('Function not implemented.');
}

function email(email: any) {
  throw new Error('Function not implemented.');
}

function logValidationErrors(group: { (...data: any[]): void; (...label: any[]): void; }, arg1: FormGroup) {
  throw new Error('Function not implemented.');
}

function MustMatch(arg0: string, arg1: string) {
  throw new Error('Function not implemented.');
}

