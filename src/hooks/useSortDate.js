export const sortDate = (arg, order = 'ASC') => {
    if (order === 'ASC') {
        return arg.sort((a, b) => a.date < b.date ? -1 : 1);
    }
    else {
        return arg.sort((a, b) => a.date > b.date ? -1 : 1);
    }
};
