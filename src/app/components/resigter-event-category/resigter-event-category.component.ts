import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import {
  CREATE_EVENT_CATEGORY,
  Get_getAllEventCategory,
  Get_getEventCategory,
  Get_getEventCategoryById,
  UPDATE_EVENT_CATEGORY,
} from 'src/app/graphql/graphql.queries';

@Component({
  selector: 'app-resigter-event-category',
  templateUrl: './resigter-event-category.component.html',
  styleUrls: ['./resigter-event-category.component.scss'],
})
export class ResigterEventCategoryComponent implements OnInit {
  event_category: any[] = [];

  public id: any;

  eventForm = this.formb.group({
    name: ['', Validators.required],
    description: [''],
    active_flag: [],
  });

  constructor(
    private formb: FormBuilder,
    private apollo: Apollo,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  isCard: boolean = false;
  isUpdate: boolean = false;

  openCard() {
    this.isCard = !this.isCard;
  }

  createEventCategory() {
    this.apollo
      .mutate({
        mutation: CREATE_EVENT_CATEGORY,
        variables: {
          NAME: this.eventForm.controls['name'].value,
          DESCRIPTION: this.eventForm.controls['description'].value,
          ACTIVE_FLAG: this.eventForm.controls['active_flag'].value,
        },
      })
      .subscribe((res: any) => {
        let event = Object.assign([], this.event_category);
        event.unshift(res['Register']);
        this.event_category = event;
        console.log('Register Event', res);
      });
    this.router.navigate(['event-category']);
  }

  updateEventCategory() {
    this.apollo
      .mutate({
        mutation: UPDATE_EVENT_CATEGORY,
        variables: {
          ID: this.id,
          NAME: this.eventForm.controls['name'].value,
          DESCRIPTION: this.eventForm.controls['description'].value,
          ACTIVE_FLAG: this.eventForm.controls['active_flag'].value,
        },
      })
      .subscribe((res: any) => {
        let event = Object.assign([], this.event_category);
        event.unshift(res['Update']);
        this.event_category = event;
        console.log('Update', res);
      });
    this.router.navigate(['event-category']);
  }

  clearEventCategoryForm() {
    this.eventForm.reset();
  }

  getEventCategory(id: string) {
    this.apollo
      .watchQuery({
        query: Get_getEventCategory,
        variables: {
          ID: id,
        },
      })
      .valueChanges.subscribe((res: any) => {
        // this.registerevent = res?.data?.Get_getEventCategory;
        const event = res.data.getEventCategoryById;
        for (const controlName in this.eventForm.controls) {
          if (controlName) {
            this.eventForm.controls['name'].setValue(event.name);
            this.eventForm.controls['description'].setValue(event.description);
            this.eventForm.controls['active_flag'].setValue(event.active_flag);
          }
        }
      });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('ID Here', this.id);
    if (this.id != '') {
      this.getEventCategory(this.id);
    }
    console.log(this.eventForm.controls);

  }
}
