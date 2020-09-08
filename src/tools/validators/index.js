export const required = value => {
    return (value || (typeof value === 'number') ?
        undefined :
        'Заполните поле');
}

export const requiredRadioBtn = value => {
    return (value || (typeof value === 'number') ?
        undefined :
        '!!!');
}

const maxLength = (max) => value => {
    return value && (value.length > max) ?
        `${value.length}. Должно не превышать ${max} символов` :
        undefined
}

export const maxLength30 = maxLength(30);
export const maxLength12 = maxLength(12);

const minLength = (min) => value => {
    return value && (value.length < min) ?
        `${value.length}. Должно быть ${min} символов или больше` :
        undefined
}

export const minLength8 = minLength(8);
export const minLength10 = minLength(10);

export const number = value =>
    value && isNaN(Number(value)) ? 'Введите числа' : undefined