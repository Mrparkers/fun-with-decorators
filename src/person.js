import {type, required, maxLength} from './decorators/index';

export default class Person {

    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    @type('string')
    @required()
    @maxLength(10)
    get firstName() { return this._firstName; }

    get lastName() { return this._lastName; }

}
