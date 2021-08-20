export function minTamValidacao (minLength, valueInput){
    if(valueInput.trim().length < minLength){
        return `Minimo de caracteres é ${minLength}`;
    }
    return null;
}
export function campoRequeridoValidacao (valueInput){
    if(valueInput.trim() === ''){
        return `Campo obrigatório`;
    }
    return null;
}