export default class Model {
    constructor() {
        console.log('here constructor model');
        this.validation = [];
    }

    validate() {
        this.validation.forEach((validationFunction) => {
            validationFunction();
        });
    }
}
