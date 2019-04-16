import { Component, OnInit } from '@angular/core';
import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Contact } from './Contact';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'answer06';
    contacts: Contact[];

    constructor() {
        this.contacts = [
            { firstName: 'Mariya', lastName: 'Stash', address: 'NY', phoneNumber: 9087865914, email: 'user@mail.com' },
            { firstName: 'Sam', lastName: 'Smith', address: 'TA', phoneNumber: 12345678, email: 'sam@gookle.com' },
            { firstName: 'John', lastName: 'Snow', address: '7King', phoneNumber: 707070707, email: 'john@winter.com' }];
    }

    ngOnInit(): void {
        this.contacts = this.contacts.sort((c1, c2) => {
            return c1.firstName.localeCompare(c2.firstName);
        });
    }

    mailTo(email: string) {
        return `mailto: ${email}`;
    }
}