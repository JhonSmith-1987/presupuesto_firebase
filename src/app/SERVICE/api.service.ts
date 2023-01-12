import { Injectable } from '@angular/core';
import {addDoc, collection, collectionData, deleteDoc, doc, Firestore} from "@angular/fire/firestore";
import {DtoSpent} from "../Dto/DtoSpent";
import {Observable} from "rxjs";
import {DtoIncome} from "../Dto/DtoIncome";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private fireStore:Firestore,
  ) { }

  // income
  postIncome(income:DtoIncome) {
    const incomeRef = collection(this.fireStore, 'income');
    return addDoc(incomeRef, income);
  }

  getIncome():Observable<DtoIncome[]> {
    const incomeRef = collection(this.fireStore, 'income');
    return collectionData(incomeRef, {idField: 'id'}) as Observable<DtoIncome[]>;
  }

  deleteIncome(income:any) {
    const incomeRef = doc(this.fireStore, `income/${income}`);
    return deleteDoc(incomeRef);
  }

  // spent
  postSpent(spent:DtoSpent) {
    const spentRef = collection(this.fireStore, 'spent');
    return addDoc(spentRef, spent);
  }

  getSpent():Observable<DtoSpent[]> {
    const spentRef = collection(this.fireStore, 'spent');
    return collectionData(spentRef, {idField: 'id'}) as Observable<DtoSpent[]>;
  }

  deleteSpent(spent:any) {
    const incomeRef = doc(this.fireStore, `spent/${spent}`);
    return deleteDoc(incomeRef);
  }

}
