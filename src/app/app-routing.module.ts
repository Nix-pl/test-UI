import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CommentsComponent} from "./comments/comments.component";
import {ItemsComponent} from "./items/items.component";

const appRoutes: Routes = [
  { path : '', component: ItemsComponent, children: [
    { path : ':id', component: CommentsComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {


}
