import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { addEmployeeComponent } from './addEmployee.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employee.component';
import { AppComponent } from './app.component';

const routes: Routes = [
 
  { path: 'addEmployee', component: addEmployeeComponent },
  { path: 'details', component: EmployeeComponent },
  { path: 'employees', component: EmployeesComponent },
 { path: 'employees/:empid', component: EmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


