import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {ApiService} from "../../SERVICE/api.service";
import {DtoIncome} from "../../Dto/DtoIncome";

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  constructor(
    private router:Router,
    private api:ApiService
  ) { }

  ngOnInit(): void {
    let session_v = sessionStorage.getItem("session");
    if (session_v != null) {
      this.router.navigate(["spent"]);
    }
  }

  async handleIncome(income: NgForm) {
    let income_dto:DtoIncome = {
      "value": income.value.value
    }
    let session:string = "ok";
    await this.api.postIncome(income_dto).then((res)=>{
      //
    });
    sessionStorage.setItem("session", session);
    await this.router.navigate(["spent"]);
  }
}
