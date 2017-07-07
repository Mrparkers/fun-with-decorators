export default () => (name, value) => {
    if (!value) {
        throw new Error(`Field '${name}' is required`);
    }
};
