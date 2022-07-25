import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  public myTable: ITable[] = [];
  public copyMyTable: ITable[] = [];
  public isAsc: boolean = true;
  constructor() {}

  ngOnInit(): void {
    this.getTable();
  }

  getTable() {
    const table: ITable[] = [
      {
        id: 1,
        cep: 13323453,
        city: 'Indaiatuba',
        number: 33,
        road: 'Rua Doubleit',
        state: 'São Pauo',
      },
      {
        id: 2,
        cep: 32323214,
        city: 'Salto',
        number: 45,
        road: 'Rua Doubleit',
        state: 'Rio de Janeiro',
      },
    ];

    this.myTable = table;
    this.copyMyTable = this.myTable;
  }

  insertRow() {}

  removeRow() {
    this.myTable.pop();
  }

  changeOrderValue() {
    this.isAsc = !this.isAsc;

    if (this.isAsc == true) {
      this.myTable = this.copyMyTable;
    } else if (this.isAsc == false) {
      this.myTable = this.myTable.slice(0).reverse();
      console.log(this.myTable);
    }
  }

  validate() {}

  searchItem(event: any) {}

  resetTableDefault() {
    this.myTable = this.copyMyTable;
  }
}

export interface ITable {
  id: number;
  road: string;
  number: number;
  city: string;
  state: string;
  cep: number;
}
