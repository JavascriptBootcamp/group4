import { bloomAdd } from '@angular/core/src/render3/di';

export class Patient {
    name: string;
    bloodPreasure: number;

    constructor(name, bloodPreasure) {
        this.name = name;
        this.bloodPreasure = bloodPreasure;
    }

    isNormal() {
        return (this.bloodPreasure >= 80 && this.bloodPreasure <= 120) ? true : false;
    };
}