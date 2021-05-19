// ** Interface in OOP not Interface Variables
console.log('=====FILE VÍ DỤ VỀ NAMESPACE=========');
console.log('===== Check console.log=============');
var Validation;
(function (Validation) {
    let letterRegexp = /^[A-Za-z]+$/; // biến này không sử dụng ngoài namespace nên không cần export
    let numberRegexp = /^[0-9]+$/;
    //**Created class letterOnlyValidator  inplement Interface StringValidator  */
    class letterOnlyValidator {
        isAcceptable(s) {
            return letterRegexp.test(s);
        }
    }
    Validation.letterOnlyValidator = letterOnlyValidator;
    //** Created class zipcodeValidator implement interface StringValidator */
    class ZipCodeValidator {
        isAcceptable(s) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
let _strings = ['Hello', '290812', '@123'];
//** Validators to use */
let _validators = {};
_validators["Zip code ne"] = new Validation.ZipCodeValidator(); // có key là Zip code ne 
_validators["Letters only"] = new Validation.letterOnlyValidator();
//** Show whether each string passed each validator */
for (let s of _strings) {
    for (let name in _validators) {
        let isMatch = _validators[name].isAcceptable(s);
        console.log(`"${s}" ${isMatch ? "matches" : "dose not match"}  "${name}. `);
    }
}
