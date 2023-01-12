import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../../SERVICE/api.service";
import {DtoIncome} from "../../Dto/DtoIncome";
import {DtoSpent} from "../../Dto/DtoSpent";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  income!: DtoIncome[];
  spent!: DtoSpent[];

  constructor(
    private router:Router,
    private api:ApiService
  ) { }

  ngOnInit(): void {
    let session_v = sessionStorage.getItem("session");
    if (session_v == null) {
      this.router.navigate(["income"]);
    }

    this.api.getIncome().subscribe(res => {
      this.income = res;
    })

    this.api.getSpent().subscribe(res => {
      this.spent = res;
      console.log(this.spent);
    })
  }

  async deleteIncome(income: any) {
    console.log(typeof income);
    await this.api.deleteIncome(income).then(res =>{
      console.log(res);
      sessionStorage.clear();
      this.router.navigate(["income"]);
    });

  }

  returnSpent() {
    this.router.navigate(["spent"]);
  }


  async deleteSpent(id_spent: any) {
    console.log(id_spent);
    await this.api.deleteSpent(id_spent).then();
  }
}
