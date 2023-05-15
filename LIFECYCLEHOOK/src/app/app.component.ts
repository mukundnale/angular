import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LIFECYCLEHOOK';

  inputText: string = '';

  destroy: boolean = true;

  OnSubmit(inputEL: HTMLInputElement){
    this.inputText = inputEL.value;
  }

  DestroyComponent(){
    this.destroy = false;
  }
}
