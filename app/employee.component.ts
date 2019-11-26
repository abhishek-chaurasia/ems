import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, ParamMap,Router } from "@angular/router";
import { Location } from "@angular/common";

//import "rxjs/add/operator/map";

@Component({
    template: `<div>
    <h2>Employee Details</h2>
    <div>
            <label>ID: </label>{{id}}
    </div>
    <button (click)="goBack()">Back</button>
</div>
`
})
export class EmployeeComponent implements OnInit { 
    id: any;

    constructor(private route: ActivatedRoute, private location: Location,private _router:Router){ }

   
    ngOnInit() {
   // this.id=this.route.snapshot.paramMap.get('empid');
   this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.id = +params['empid']||0;
      });
    }

    goBack(): void {
       // this.location.back();
       this._router.navigate(['/employees']);
    }
}
