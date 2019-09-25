import { Component, OnInit } from '@angular/core';
declare var $: any;

class user
{
  name:string;
  email:string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  employees=
  [{name:"John"},
{name:"Rani"},{name:"Raja"}]
  search:string
 
  constructor() {
    
   }

  ngOnInit() {

  }

}
