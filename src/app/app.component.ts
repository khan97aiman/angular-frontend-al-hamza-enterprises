import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  menuItems = [
    {
      name: "Dashboard",
      icon: "home",
      link: "#",
      list: [],
    },
    {
      name: "Employees Management",
      icon: "people",
      link: "#",
      list: [
        {
          subMenu: "Employee Details",
          link: "#"
        },
        {
          subMenu: "Attendance",
          link: "#"
        },
        {
          subMenu: "Advance Salary",
          link: "#"
        },
        {
          subMenu: "Leaves",
          link: "#"
        },
        {
          subMenu: "Overtime",
          link: "#"
        },
      ],
    },
    {
      name: "Orders Management",
      icon: "assignment",
      link: "#",
      list: [
        {
          subMenu: "Order Details",
          link: "#"
        },
        {
          subMenu: "Order XYZ",
          link: "#"
        },
      ],
    }
  ];
}
