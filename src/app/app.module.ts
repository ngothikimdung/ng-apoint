import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbMenuModule, NbSelectModule, NbSidebarModule, NbThemeModule, NbToggleModule } from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResigterEventCategoryComponent } from './components/resigter-event-category/resigter-event-category.component';
import { EventCategoryComponent } from './components/event-category/event-category.component';
import { DialogDelComponent } from './components/dialog-del/dialog-del.component';

@NgModule({
  declarations: [
    AppComponent,
    ResigterEventCategoryComponent,
    EventCategoryComponent,
    DialogDelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot(),
    RouterModule,
    NbLayoutModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbCheckboxModule,
    NbSelectModule,
    NbToggleModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSidebarModule.forRoot(),
    NbDialogModule.forRoot(),
    NbMenuModule,
    NbActionsModule,
    GraphQLModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
