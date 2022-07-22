import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { Apollo } from 'apollo-angular';
import {
  Get_getAllEventCategory,
  Get_getEventCategoryById,
  Get_getEventCategoryByName,
  Get_searchEventCategory,
} from 'src/app/graphql/graphql.queries';
import { DialogDelComponent } from '../dialog-del/dialog-del.component';

@Component({
  selector: 'app-event-category',
  templateUrl: './event-category.component.html',
  styleUrls: ['./event-category.component.scss'],
})
export class EventCategoryComponent implements OnInit {
  iscard: boolean = false;
  event_category: any[] = [];
  event_id = '';

  active_flag = false;

  toggle(active_flag: boolean) {
    this.active_flag = active_flag;
  }
  eventForm = this.formb.group({
    name: ['', Validators.required],
    description: [''],
    active_flag: [false],
  });

  constructor(
    private apollo: Apollo,
    private router: Router,

    private formb: FormBuilder,
    private dialogService: NbDialogService
  ) {}

  openCard() {
    this.iscard = !this.iscard;
  }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: Get_getAllEventCategory,
        fetchPolicy: 'network-only',
      })
      .valueChanges.subscribe((res: any) => {
        this.event_category = res?.data?.getAllEventCategory;
        console.log('Data Event Category', res);
      });
  }

  clearEventCategoryForm() {
    this.eventForm.reset();
    this.eventForm.get('name')?.reset('');
    this.eventForm.get('active_flag')?.reset(false);
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
        console.log('Edit By ID: ', id);
      });
    this.router.navigate(['edit-eventcategory', id]);
  }

  removeEventCategory(id: string) {
    this.event_id = id;
    this.apollo
      .watchQuery({
        query: Get_getEventCategoryById,
        variables: {
          ID: this.event_id,
        },
      })
      .valueChanges.subscribe((res: any) => {
        // console.log('Remove By ID: ', id);
      });
    this.openDialog();
  }
  openDialog() {
    this.dialogService.open(DialogDelComponent, {
      context: {
        event_id: this.event_id,
      },
    });
  }

  searchEventCategory() {
    this.apollo
      .watchQuery({
        query: Get_searchEventCategory,
        fetchPolicy: 'network-only',
        variables: {
          NAME: this.eventForm.controls['name'].value,
          ACTIVE_FLAG: this.eventForm.controls['active_flag'].value,
        },
      })
      .valueChanges.subscribe((res: any) => {
        this.event_category = res?.data?.searchEventCategory;
      });
    this.clearEventCategoryForm();
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
