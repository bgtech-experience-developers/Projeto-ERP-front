export const phoneNumberMask = (value) => {
    if (!value) return '';

    return value
        .replace(/[\D]/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})(\d+?)/, '$1');
}

export const cpfMask = (value) => {
    if (!value) return '';

    return value
        .replace(/[\D]/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1-$2')
        .replace(/(-\d{2})(\d+?)/, '$1');
}

export const cnpjMask = (value) => {
    if (!value) return '';

    return value
        .replace(/[\D]/g, '')
        .replace(/^(\d{2})(\d)/, "$1.$2")
        .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/\.(\d{3})(\d)/, ".$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .replace(/(-\d{2})(\d+?)/, '$1');
}



export const cepMask = (value) => {
    if (!value) return '';

    return value
        .replace(/[\D]/g, '')
        .replace(/^(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{3})(\d+?)/, '$1');
}

export const birthMask = (value) => {
    if (!value) return '';

    return value
        .replace(/[\D]/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d+?)/, '$1');
}
