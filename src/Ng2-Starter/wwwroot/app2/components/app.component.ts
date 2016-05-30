import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
    <div>
        <h4>{{description}}</h4>
    <div>
    `
})

export class AppComponent {
    description: string = 'Here goes a second Angular2 app...';
}