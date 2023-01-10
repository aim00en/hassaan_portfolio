import { Component, OnInit } from '@angular/core';
import {
 faFire, faMugHot, faPeopleGroup
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  icon1 = faFire;
  icon2 = faMugHot;
  icon3 = faPeopleGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
