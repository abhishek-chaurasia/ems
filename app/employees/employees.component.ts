import { Component, OnInit } from '@angular/core';
import {Employee} from './employee';
import{EmployeesService} from '../employees.service';
import { Observable } from 'rxjs/Observable';
@Component({
  
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

private employees: Employee[];
  constructor(private _employeesService:EmployeesService){}
  ngOnInit() {
    this._employeesService.getEmployees().subscribe(
      data => this.employees = data
    )

}
}