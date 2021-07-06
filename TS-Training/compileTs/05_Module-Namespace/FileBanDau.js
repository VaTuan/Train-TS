// ** Interface in OOP not Interface Variables
console.log('=====FILE BAN ĐẦU CHO VÍ DỤ VỀ MODULE VÀ NAMESPACE=========');
console.log('===== Check console.log=============');
let letterRegexp = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;
//**Created class letterOnlyValidator  inplement Interface StringValidator  */
class letterOnlyValidator {
    isAcceptable(s) {
        return letterRegexp.test(s);
    }
}
//** Created class zipcodeValidator implement interface StringValidator */
class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
let strings = ['Hello', '290812', '@123'];
//** Validators to use */
let validators = {};
validators["Zip code ne"] = new ZipCodeValidator(); // có key là Zip code ne 
validators["Letters only"] = new letterOnlyValidator();
//** Show whether each string passed each validator */
for (let s of strings) {
    for (let name in validators) {
        let isMatch = validators[name].isAcceptable(s);
        console.log(`"${s}" ${isMatch ? "matches" : "dose not match"}  "${name}. `);
    }
}
// ** VÍ DỤ VỀ NAME SPACE
// Tạo 1 namespace
var Validator;
(function (Validator) {
    Validator.a = 'tuandz'; // phải export thì mới có thể truy cập được từ bên ngoài
})(Validator || (Validator = {}));
console.log('BIẾN a TRONG NAMESPACE:', Validator.a); // muốn truy xuất tới 1 giá trị trong namespace thì bắt buộc phải export nó
