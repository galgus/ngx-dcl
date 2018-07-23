import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-demo-component',
  template: '<div (click)="click()">Child {{campo}}</div>'
})
export class DemoComponent {

  private _campo = 0;

  // Outputs (Events)
  @Output() public cOutput: EventEmitter<any> = new EventEmitter();

  get campo(): number { return this._campo; }

  set campo(campo: number) {
    this._campo = campo;
    this.cOutput.emit(this._campo);
  }

  click() {
    this.campo++;
  }
}
