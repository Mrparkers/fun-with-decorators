export default (length) => (name, value) => {
    if (value.length > length) {
        throw new Error(`Expected field '${name}' to have a max length of '${length}', but it has a length of '${value.length}'`);
    }
};
