import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbIconModule, NbInputModule, NbLayoutModule, NbMenuModule, NbSelectModule, NbSidebarModule, NbThemeModule, NbToggleModule } from '@nebular/theme';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResigterEventComponent } from './resigter-event/resigter-event.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ResigterEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    NbMenuModule,
    NbActionsModule,
    GraphQLModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
