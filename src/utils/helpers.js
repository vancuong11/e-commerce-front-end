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
export const validate = (payload, setInvalidField) => {
    let invalids = 0;
    const formatPayload = Object.entries(payload);
    for (let i of formatPayload) {
        if (i[1].trim() === '') {
            invalids++;
            setInvalidField((prev) => [...prev, { name: i[0], message: 'Required this field' }]);
        }
    }
    for (let i of formatPayload) {
        switch (i[0]) {
            case 'email':
                const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (!i[1].match(regex)) {
                    invalids++;
                    setInvalidField((prev) => [...prev, { name: i[0], message: 'Email invalid' }]);
                }
                break;
            case 'password':
                if (i[1].length < 6) {
                    invalids++;
                    setInvalidField((prev) => [...prev, { name: i[0], message: 'Password minimum 6 characters' }]);
                }
                break;
            default:
                break;
        }
    }
    return invalids;
};
