import icons from './icons';

const { FaRegStar, FaStar } = icons;
export const createSlug = (slug) => {
    return slug
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .split(' ')
        .join('-');
};

export const formatPrice = (number) => {
    return Number(number?.toFixed(1)).toLocaleString();
};

export const renderStarFromNumber = (number, size) => {
    const star = [];
    if (!Number(number)) {
        return;
    }
    for (let i = 0; i < +number; i++) {
        star.push(<FaStar color="orange" size={size || 16} />);
    }

    for (let i = 5; i > +number; i--) {
        star.push(<FaRegStar color="orange" size={size || 16} />);
    }

    return star;
};
