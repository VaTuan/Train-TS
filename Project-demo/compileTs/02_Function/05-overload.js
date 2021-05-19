//CÁCH ĐỂ OVERLOAD LẠI FUNC ĐÃ ĐƯỢC ĐỊNH NGHĨA TRƯỚC
function funcAbc(x) {
    if (typeof x === 'number') {
        return 'OverLoad hihi!';
    }
    else if (typeof x === 'string') {
        return 1000;
    }
    else {
        return true;
    }
}
console.log(funcAbc(false));
