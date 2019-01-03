import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    // close navbar after click nav item link.
    // array of nav items link.
    const navItems = Array.from(document.getElementsByClassName('nav-item'));
    // for each item add click event listner to it.
    navItems.forEach((item, i) => {
      item.addEventListener('click', itemClick, false);
    });
    // triggre checkbox function.
    function itemClick(e) {
      document.getElementById('c__navbar-toggler').click();
    }
  }

}
