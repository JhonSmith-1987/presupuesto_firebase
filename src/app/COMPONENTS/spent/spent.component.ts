import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {DtoSpent} from "../../Dto/DtoSpent";
import {ApiService} from "../../SERVICE/api.service";
import {count} from "rxjs";

@Component({
  selector: 'app-spent',
  templateUrl: './spent.component.html',
  styleUrls: ['./spent.component.css']
})
export class SpentComponent implements OnInit {

  income!:any;
  spent_total:DtoSpent[] = [];
  sum_spent!:any;
  result_spent!:any;

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
      this.income = res[0].value;
    })

    this.api.getSpent().subscribe(res => {
      this.spent_total = res;
      this.sum_spent = this.spent_total.map(item => item.value).reduce((count, item) => count + item, 0);
      this.result_spent = this.income - this.sum_spent;
      console.log(this.result_spent);
    });

  }

  async handleSpent(spent: NgForm) {
    let spent_dto:DtoSpent = {
      "detail": spent.value.detail,
      "value": spent.value.value
    }
    console.log(spent_dto);
    await this.api.postSpent(spent_dto).then((res)=>{
      console.log(res);
    })
  }

}
