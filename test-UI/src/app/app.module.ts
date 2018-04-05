import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { CommentsComponent } from './comments/comments.component';

import {ItemService} from "./services/item.service";
import { ItemsListComponent } from './items-list/items-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    CommentsComponent,
    ItemsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
