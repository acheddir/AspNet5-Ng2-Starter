import { Component } from '@angular/core';

@Component({
    selector: 'pm-contact',
    template: `
    <div>
        <h4>{{contactComponentDescription}}</h4>
    <div>
    `
})

export class ContactComponent {
    contactComponentDescription: string = 'Here goes a second ng2 component...';
}