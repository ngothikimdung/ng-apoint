import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import {
  Get_getAllEventCategory,
  Get_getEventCategoryById,
  Get_getEventCategoryByName,
} from 'src/app/graphql/graphql.queries';

@Component({
  selector: 'app-event-category',
  templateUrl: './event-category.component.html',
  styleUrls: ['./event-category.component.scss'],
})
export class EventCategoryComponent implements OnInit {
  isCard: boolean = false;
  event_category: any[] = [];

  eventForm = this.formb.group({
    name: ['', Validators.required],
    description: [''],
    active_flag: [null],
  });

  constructor(
    private apollo: Apollo,
    private router: Router,
    private route: ActivatedRoute,
    private formb: FormBuilder
  ) {}

  openCard() {
    this.isCard = !this.isCard;
  }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: Get_getAllEventCategory,
      })
      .valueChanges.subscribe((res: any) => {
        this.event_category = res?.data?.getAllEventCategory;
        console.log('Data Event Category', res);
      });
  }
  clearEventCategoryForm() {
    this.eventForm.reset();
  }

  resigterEventCategory() {
    this.router.navigate(['resigter-eventcategory', '']);
  }

  editEventCategory(id: string) {
    this.apollo
      .watchQuery({
        query: Get_getEventCategoryById,
        variables: {
          ID: id,
        },
      })
      .valueChanges.subscribe((res: any) => {
        console.log('Search By ID: ', id);
      });
    this.router.navigate(['edit-eventcategory', id]);
  }

  searchEventCategoryByName() {
    this.apollo
      .watchQuery({
        query: Get_getEventCategoryByName,
        variables: {
          NAME: this.eventForm.controls['name'].value,
        },
      })
      .valueChanges.subscribe((res: any) => {
        this.event_category = res?.data?.getEventCategoryByName;
        console.log('Search By Name: ', this.event_category);
      });
  }




}
