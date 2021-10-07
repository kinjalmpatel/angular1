import { Component, OnInit } from '@angular/core';
import { Employee ,Experience} from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id: number;
  employee: Employee; 

  employeeExp: Array<Experience> = new Array<Experience>();
constructor(private route: ActivatedRoute, private employeeService: EmployeeService) { }
ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];//console.log(this.id);
  //this.ab = this.route.snapshot.params['eid'];
  const empexp = new Experience();
  this.employeeExp.push(empexp);
 this.employeeService.getEmployeeById(this.id).subscribe(data => {
  this.employee = data;
  console.log(this.employee);
 }, error => console.log(error));  
 // console.log(this.employeeExp);
}
}
