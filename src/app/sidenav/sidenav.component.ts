import { Component, OnInit } from '@angular/core';
import {
  faHouse,
  faUserTie,
  faComputer,
  faGraduationCap,
  faLayerGroup,
  faCreditCard,
  faSmile, faBlog, faAddressBook
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  icon1 = faHouse;
  icon2 = faUserTie;
  icon3 = faComputer;
  icon4 = faGraduationCap;
  icon5 = faLayerGroup;
  icon6 = faCreditCard;
  icon7 = faSmile;
  icon8 = faBlog;
  icon9 = faAddressBook;




  constructor() {}

  ngOnInit(): void {}
}
