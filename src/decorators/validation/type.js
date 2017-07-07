export default (expectedType) => (name, value) => {
    const actualType = typeof value;

    if (actualType !== expectedType) {
        throw new Error(`Expected field '${name}' to be of type '${expectedType}', but it was of type '${actualType}'`)
    }
};
