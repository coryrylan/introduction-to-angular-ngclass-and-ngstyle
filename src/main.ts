import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  template: `
    <h1>Introduction to Angular ngClass and ngStyle</h1>

    <p>
      <a href="https://coryrylan.com/blog/introduction-to-angular-ngclass-and-ngstyle">Tutorial at coryrylan.com</a>
    </p>

    <div [style.color]="'orange'">style using property syntax</div>
    <div [className]="'blue'">css class using property syntax</div>

    <br /><br />

    <input [(ngModel)]="color" />
    <button (click)="size = size + 1">+</button>
    <button (click)="size = size - 1">-</button>

    <div [ngStyle]="{'color': color, 'font-size': size + 'px'}">
      style using ngStyle
    </div>

    <br /><br/>

    <div [ngClass]="['bold-text', 'green']">array of classes</div>
    <div [ngClass]="'italic-text blue'">string of classes</div>
    <div [ngClass]="{'small-text': true, 'red': true}">object/map of classes</div>

    <br /><br/>

    <span [ngClass]="displayText">toggled with ngClass</span> <button (click)="toggle()">Toggle</button>
  `,
})
export class App {
  color = 'pink';
  size = 16;
  displayText = 'show-class';
  visible = true;

  toggle() {
    this.visible = !this.visible;
    this.displayText = this.visible ? 'show-class' : 'hide-class';
  }
}

bootstrapApplication(App);
