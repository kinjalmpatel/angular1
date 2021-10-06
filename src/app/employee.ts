export class Employee {
    id: number;
    firstName:string;
    lastName:string;
    emailId:string | undefined;
    experience:Array<Experience> | undefined;
  map: any;
}
export class Experience {

    eid:number;
    company_name:string;
    experienceinyears:number | undefined
    position:string | undefined;
    exp_id:number ;
    isEdit:boolean | false | undefined;
}
//  export class Employeewithexperience{
//      employee : Employee;
//           experience:Array<Experience>;
//    static employee: Employee;
//    static experience: Experience[];
//     constructor (){
//     this.employee= new Employee();
//     this.experience=new Array<Experience>();
// }}
