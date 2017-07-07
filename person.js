import {type, required, maxLength} from './decorators';

export default class Person {

    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    @maxLength(10)
    @type('string')
    @required
    get firstName() { return this._firstName; }

    get lastName() { return this._lastName; }

}
