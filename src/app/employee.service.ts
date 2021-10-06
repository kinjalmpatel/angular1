import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee, Experience } from './employee';
//import { Employee } from './employee/experience';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 private baseUrl="http://localhost:8080/api/v1/employees";
  updateEmployee: any;
  constructor(private httpClient:HttpClient) { }
  getEmployeesList():Observable<Employee[]>{
return this.httpClient.get<Employee[]>(`${this.baseUrl}`);

  }
  createEmployee(employee:Employee):Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`,employee);
  }
 getExperienceList():Observable<Experience[]>{
   return this.httpClient.get<Experience[]>(`${this.baseUrl}`);
}
 createExperience(experience:Array<Experience>):Observable<object>{
      return this.httpClient.post(`${this.baseUrl}`,experience);
}
getEmployeeById(id:number):Observable<Employee>{
  return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`)
}
getExperienceListById(eid:number):Observable<Experience[]>{
  return this.httpClient.get<Experience[]>(`${this.baseUrl}`);
}
}

  
