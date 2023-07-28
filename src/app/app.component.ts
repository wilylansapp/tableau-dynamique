import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public data = [
    { name: 'arazr', number: 1 },
    { name: 'rzrt', number: 2 },
  ];
  public transposeView = false;
  private columnCounter = 0;

  objectKeys(row: any) {
    return Object.keys(row);
  }

  switchView() {
    this.transposeView = !this.transposeView;
  }

  addColumn() {
    const newColumnKey = 'newColumn' + this.columnCounter++;
    this.data.forEach((row) => (row[newColumnKey] = Math.random()));
  }

  addRow() {
    const newRow = {};
    Object.keys(this.data[0]).forEach((key) => (newRow[key] = Math.random()));
    this.data.push(newRow);
  }
}
