import { Component,OnInit} from '@angular/core';
import{Employee} from './employee';
@Component({
  templateUrl: '/addEmployee.component.html'
})
export class addEmployeeComponent{
empList:Employee[]=[];
addEmployee(form)
{
  let emp:Employee;
  emp=form.value;
  this.empList.push(emp);
  console.log(form.value)
}

 }
