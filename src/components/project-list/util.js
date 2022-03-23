const isFalsy = value => value === 0 ? false : !value;

export const cleanObject = object => {
    const result = { ...object };
    Object.keys(result).forEach(item => {
       if (isFalsy(result[item])) {
           delete result[item];
       }
    });
    return result;
};