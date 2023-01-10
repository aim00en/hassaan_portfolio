import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  cardItems = [
    {title:'Project 1',desc:'This is the description of project 1',img:'/assets/images/acha-sa-name.jpg'},
    {title:'Project 2',desc:'This is the description of project 2',img:'/assets/images/acha-sa-name.jpg'},
    {title:'Project 3',desc:'This is the description of project 3',img:'/assets/images/acha-sa-name.jpg'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
