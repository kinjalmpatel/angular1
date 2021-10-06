import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee, Experience } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number; eid: number; ab: string;
  employee: Employee = new Employee();
   
   //this.employee.id=this.StudentId.value;  
  employeeExp: Array<Experience> = new Array<Experience>();

  updateEmployee: any;
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];//console.log(this.id);
    this.ab = this.route.snapshot.params['eid'];
    
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
     this.employee = data;
     console.log(this.employee);
    }, error => console.log(error));  
    this.employeeService.getExperienceListById(this.eid).subscribe(data1 => {
  
    }, error => console.log(error));

   // console.log(this.employeeExp);
  }
  addRow(exp: Experience) {
    //this.employee1 = { company_name: "", experience_in_years: "", position: "" };
    //exp.isEdit = true;
    // const empexp = new Experience();
    //this.employeeExp.push(empexp);
    //console.log(this.employeeExp);
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


  editRow(exp: Experience) {
    this.employeeExp.find(x => x.eid = exp.eid);
  }
  onSubmit() {
    const empexp = new Experience();
    this.employeeExp.push(empexp);
    // console.log(this.employeeExp);
    this.updateEmployee();
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }

}
