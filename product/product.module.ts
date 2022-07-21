import {RouterModule, Routes} from "@angular/router";
import {ProductCreateComponent} from "./product-create/product-create.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {ProductDeleteComponent} from "./product-delete/product-delete.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {NgModule} from "@angular/core";
import {HomeComponent} from "../home/home.component";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {NanavbarComponent} from "../nanavbar/nanavbar.component";


const routes: Routes = [
  {path: 'create', component: ProductCreateComponent},
  {path: '', component: ProductListComponent},
  {path: 'edit/:id', component: ProductEditComponent},
  {path: 'delete/:id', component: ProductDeleteComponent},
]

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    HomeComponent,
    ProductDeleteComponent,
    NanavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class ProductModule { }