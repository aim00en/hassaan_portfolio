import { Component, OnInit } from '@angular/core';
import {
  faGraduationCap, faBriefcase 
} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  icon1 = faGraduationCap;
  icon2 = faBriefcase;

  constructor() { }

  ngOnInit(): void {
  }

}
