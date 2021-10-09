import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee, Experience } from '../employee';
import { EmployeeService } from '../employee.service';
import { FormBuilder, EmailValidator, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  id: number; eid: number; ab: string;
  employee: Employee = new Employee();
  employeeExp: Array<Experience> = new Array<Experience>();
  updateEmployee: any;
 
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(/^.+\..+$/)]],
  });
    this.id = this.route.snapshot.params['id'];//console.log(this.id);
    this.ab = this.route.snapshot.params['eid'];
    const empexp = new Experience();
    this.employeeExp.push(empexp);

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
      console.log(this.employee);
     
    }, error => console.log(error));
    
  }    get f() { return this.registerForm.controls; }

  addRow(exp: Experience) {
    exp.isEdit = true;
    const empexp = new Experience();
    this.employeeExp.push(empexp);
    // this.toastr.success('New row added successfully', 'New Row');

    //console.log(this.employeeExp);
    // return true;
  }
  saveEmployee() {
    const blanckemp = this.employeeExp.find(x => !x.isEdit);
    if (blanckemp) {
      this.employeeExp.splice(this.employeeExp.length - 1, 1);
    }
    this.employee.experience = this.employeeExp;
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      this.saveExprience();
      //   this.gotoEmployeeList();
    },
      error => console.log(error));
  }
  saveExprience() {

    this.employeeService.createExperience(this.employeeExp).subscribe(data => {
      console.log(data);
      // this.gotoEmployeeList();
    },
      error => console.log(error));
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


  editRow(exp: Experience) {
    this.employeeExp.find(x => x.eid = exp.eid);
  }
  onSubmit() {
    const empexp = new Experience();
    this.employeeExp.push(empexp);
    // console.log(this.employeeExp);
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      // stop here if form is invalid
      this.submitted = true;
      if (this.registerForm.invalid) {

        alert('Please Fill All The Data Properly\n\n');
        return;
      }
      else {
        alert('SUCCESS!! :-)\n\n');

      }
      this.goToEmployeeList();
    },
      error => console.log(error));
  }



  goToEmployeeList() {
    this.router.navigate(['/employees']);
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



