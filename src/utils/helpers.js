export const createSlug = (slug) => {
    return slug
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .split(' ')
        .join('-');
};
