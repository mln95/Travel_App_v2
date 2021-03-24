function checkName(userData){
    var pattern = new RegExp(/^[A-Za-z]+$/);
    return !!pattern.test(userData);
}

export {checkName};