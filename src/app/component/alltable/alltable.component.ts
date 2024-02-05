import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-alltable',
  templateUrl: './alltable.component.html',
  styleUrl: './alltable.component.css'
})

export class AlltableComponent {
  tables: number[][] = [];

  constructor() {
    this.generateTables();
  }

  generateTables(): void {
    for (let i = 1; i <= 10; i++) {
      let table: number[] = [];
      for (let j = 1; j <= 10; j++) {
        table.push(i * j);
      }
      this.tables.push(table);
    }
  }
}