class Validation {
    constructor(property, validationFunction) {
        this.property = property;
        this.validationFunction = validationFunction;
    }
}

function validate() {
    this.validation.forEach((validation) => {
        validation.validationFunction(this[validation.property]);
    });
}

const addModelPropertiesIfTheyDoNotExist = (target) => {
    if (target.validation === undefined) {
        target.validation = [];
        target.validate = validate;
    }
};

export const exposeAsDecorator = (validationFunction) => (...args) => (target, name, descriptor) => {
    addModelPropertiesIfTheyDoNotExist(target);

    const validation = new Validation(name, validationFunction(...args).bind(null, name));

    target.validation.push(validation);

    return descriptor;
};
