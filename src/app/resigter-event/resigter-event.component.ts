import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-resigter-event',
  templateUrl: './resigter-event.component.html',
  styleUrls: ['./resigter-event.component.scss']
})
export class ResigterEventComponent implements OnInit {

  constructor() { }
  isCard: boolean = false;
  menuItems: NbMenuItem[] = [
    {
      title: 'Profile',

    },
    {
      title: 'Shopping Bag',
    },
    {
      title: 'Orders',
    },
  ];

  openCard(){
    this.isCard = !this.isCard
  }

  ngOnInit(): void {
  }

}
