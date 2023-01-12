import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IncomeComponent} from "./COMPONENTS/income/income.component";
import {SpentComponent} from "./COMPONENTS/spent/spent.component";
import {TableComponent} from "./COMPONENTS/table/table.component";

const routes: Routes = [
  { path:"income", component: IncomeComponent },
  { path:"spent", component: SpentComponent },
  { path:"history", component: TableComponent },
  { path:"", redirectTo: "income", pathMatch:"full" },
  { path:"**", redirectTo: "income", pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
