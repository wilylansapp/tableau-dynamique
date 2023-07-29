import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public data = [
    { name: 'arazr', number: 1 },
    { name: 'rzrt', number: 2 },
    { name: 'pakd', number: 2 },
  ];
  public transposeView = true;
  public columns = [];
  private columnCounter = 0;

  constructor() {
    this.columns = this.getColumns();
  }

  getColumns() {
    const columns = [];
    const keys = Object.keys(this.data[0]);
    keys.forEach((key, index) => {
      const column = [];
      column.push(key);
      this.data.forEach((row) => column.push(row[key]));
      columns.push(column);
    });
    return columns;
  }

  objectKeys(row: any) {
    return Object.keys(row);
  }

  objectValues(row: any) {
    return Object.values(row);
  }

  switchView() {
    this.transposeView = !this.transposeView;
  }

  addColumn() {
    const newColumnKey = 'newColumn' + this.columnCounter++;
    this.data.forEach((row) => (row[newColumnKey] = Math.random()));
    this.columns = this.getColumns();
  }

  addRow() {
    const newRow = {};
    Object.keys(this.data[0]).forEach((key) => (newRow[key] = Math.random()));
    this.data.push(newRow);
    this.columns = this.getColumns();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }
}
