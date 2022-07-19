import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  public myTable: ITable[] = [];
  public tableClean: ITable[] = [];
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
        isAsc: true,
      },
      {
        id: 2,
        cep: 32323214,
        city: 'Salto',
        number: 45,
        road: 'Rua Doubleit',
        state: 'Rio de Janeiro',
        isAsc: true,
      },
    ];

    this.myTable = table;
    this.tableClean = this.myTable;
  }

  insertRow() {}

  removeRow() {
    this.myTable.pop();
  }

  order(isAsc: boolean) {
    console.log(isAsc);

    if (isAsc == true) {
      this.myTable.sort();
      console.log(this.myTable);
    } else {
    }
  }

  validate() {}

  search() {}

  clean() {}
}

export interface ITable {
  id: number;
  road: string;
  number: number;
  city: string;
  state: string;
  cep: number;
  isAsc: boolean;
}
