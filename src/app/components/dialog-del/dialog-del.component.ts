import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogRef } from '@nebular/theme';
import { Apollo } from 'apollo-angular';
import { DELETE_EVENT_CATEGORY, Get_getAllEventCategory, Get_getEventCategory, Get_getEventCategoryById } from 'src/app/graphql/graphql.queries';

@Component({
  selector: 'app-dialog-del',
  templateUrl: './dialog-del.component.html',
  styleUrls: ['./dialog-del.component.scss']
})
export class DialogDelComponent implements OnInit {
  public id: any;
  event_category: any[] = [];




  constructor(
    private formb: FormBuilder, private apollo: Apollo,private route: ActivatedRoute,protected dialogRef: NbDialogRef<DialogDelComponent>) {
  }

  cancel() {
    this.dialogRef.close();
  }

  deleteEventCategory(id : string) {
    this.apollo
      .mutate({
        mutation: DELETE_EVENT_CATEGORY,
        variables: {
          ID: id,
        },
      })
      .subscribe((res: any) => {
        console.log('Delete By ID: ', id);
      });

  }


  ngOnInit(): void {
    this.apollo
    .watchQuery({
      query: Get_getEventCategoryById,
      fetchPolicy: 'network-only'
    })
    .valueChanges.subscribe((res: any) => {
      // this.event_category = res?.data?.getEventCategoryById;
      console.log('Data Event Category', res.data.getEventCategoryById(this.id));
    });

  }

}
