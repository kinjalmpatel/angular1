import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service'
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();
    }
    private getEmployees(){
      this.employeeService.getEmployeesList().subscribe(data =>{
        this.employees=data;
      });
    }
    updateEmployee(id: number){
      this.router.navigate(['update-employee', id]);
    }
    // this.employees = [{
    //   "id": 1,
    //   "firstName": "kinjal",
    //   "lastname": "patel",
    //   "emailid": "kp@gm,ail.com,"
    // },
    // {
    //   "id": 2,
    //   "firstName": "kinjal",
    //   "lastname": "patel",
    //   "emailid": "kp@gm,ail.com,"
    // }

    // ];
  

}
