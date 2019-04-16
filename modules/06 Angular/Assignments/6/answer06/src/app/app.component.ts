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



/*use group4/Modules/03 Front End Development/Assignments/11
generate the table using Typescript
sort by first name using Array.prototype.sort().
display the results in an Angular application.*/

/*
<body>
    <table border="1">

        <tr>
            <td>Mariya</td>
            <td>Stash</td>
            <td>NY</td>
            <td>+9087865914</td>
            <td><a href="mailto:user@mail.com">user@mail.com</a></td>
        </tr>

        <tr>
                <td>Sam</td>
                <td>Smith</td>
                <td>LA</td>
                <td>+99843216514</td>
                <td><a href="mailto:sam@gookle.com">sam@gookle.com</a></td>
            </tr>
    </table>
</body>
</html> */