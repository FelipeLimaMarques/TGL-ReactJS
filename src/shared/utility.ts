import { IRules } from './interfaces';

export const updateObject = (oldObject: object, updatedProperties: any) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};


export const checkValidity = ( value: string, rules: IRules ): boolean => {
    let isValid: boolean = true;
    
    if ( !rules ) {
        return true;
    }

    if ( rules.required ) {
        isValid = value.trim() !== '' && isValid;
    }

    if ( rules.minLength ) {
        isValid = value.length >= rules.minLength && isValid;
    }

    if ( rules.maxLength ) {
        isValid = value.length <= rules.maxLength && isValid;
    }

    if ( rules.isEmail ) {
        const pattern: RegExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test( value ) && isValid;
    }

    return isValid;
}

export const getRandomIntInclusive = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randComplete = (arr: Array<any>, max: number, old: number, range: number) => {
    for (let i = 0; i < max - old; i++) {
        let rand = getRandomIntInclusive(1, range);
        if (arr.includes(rand)) {
            i--;
            continue;
        }
        arr = arr.concat(rand);
    }
    arr = arr.sort((a, b) => a - b);
    return arr;
}

export const formatToBRL = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(price);
}