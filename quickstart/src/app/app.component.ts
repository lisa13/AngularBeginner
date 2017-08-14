import { Component } from '@angular/core';


@Component({ //called decorator
  selector: 'my-app', //is a directive to insert into html
  template: `<h1>Hello {{name}}</h1>`, //allows us to write html code 
})
export class AppComponent  { name = 'Angular'; }
