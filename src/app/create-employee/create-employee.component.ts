import { Component, OnInit } from '@angular/core';
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
  //constructor(private toastr: ToastrService) { }

  employee: Employee = new Employee();
  employeeExp: Array<Experience> = new Array<Experience>();
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    const empexp = new Experience();
    this.employeeExp.push(empexp);
  }
  addRow(exp:Experience) {
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
  const blanckemp = this.employeeExp.find(x=>!x.isEdit);
if(blanckemp){
  this.employeeExp.splice(this.employeeExp.length-1,1);
}
    this.employee.experience = this.employeeExp;
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
      // this.saveExprience();
      this.gotoEmployeeList();
    },
      error => console.log(error));
  }

  editRow(exp:Experience){
    this.employeeExp.find(x=>x.eid = exp.eid);
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
    console.log(this.employee);
    this.saveEmployee();
  }

}




