import Validation from './validation';

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

export const type = (expectedType) => (target, name, descriptor) => {
    addModelPropertiesIfTheyDoNotExist(target);

    const validateType = (value) => {
        const actualType = typeof value;

        if (actualType !== expectedType) {
            throw new Error(`Expected field '${name}' to be of type '${expectedType}', but it was of type '${actualType}'`)
        }
    };

    const validation = new Validation(name, validateType);

    target.validation.push(validation);

    return descriptor;
};

export const required = (target, name, descriptor) => {
    addModelPropertiesIfTheyDoNotExist(target);

    const validateRequired = (value) => {
        if (!value) {
            throw new Error(`Field '${name}' is required`);
        }
    };

    const validation = new Validation(name, validateRequired);

    target.validation.push(validation);

    return descriptor;
};

export const maxLength = (length) => (target, name, descriptor) => {
    addModelPropertiesIfTheyDoNotExist(target);

    const validateLength = (value) => {
        if (value.length > length) {
            throw new Error(`Expected field '${name}' to have a max length of '${length}', but it has a length of '${value.length}'`);
        }
    };

    const validation = new Validation(name, validateLength);

    target.validation.push(validation);

    return descriptor;
};
