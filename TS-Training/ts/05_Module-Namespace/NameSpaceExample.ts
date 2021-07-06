// ** Interface in OOP not Interface Variables
console.log('=====FILE VÍ DỤ VỀ NAMESPACE=========');
console.log('===== Check console.log=============')

namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean
    }
    let letterRegexp: any = /^[A-Za-z]+$/;   // biến này không sử dụng ngoài namespace nên không cần export
    let numberRegexp: any = /^[0-9]+$/;

    //**Created class letterOnlyValidator  inplement Interface StringValidator  */
    export class letterOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return letterRegexp.test(s)
        }
    }

    //** Created class zipcodeValidator implement interface StringValidator */
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s)
        }
    }
}


let _strings = ['Hello', '290812', '@123'];

//** Validators to use */
let _validators: { [s: string]: Validation.StringValidator } = {};
_validators["Zip code ne"] = new Validation.ZipCodeValidator();  // có key là Zip code ne 
_validators["Letters only"] = new Validation.letterOnlyValidator();

//** Show whether each string passed each validator */

for (let s of _strings) {
    for (let name in _validators) {
        let isMatch = _validators[name].isAcceptable(s);
        console.log(`"${s}" ${isMatch ? "matches" : "dose not match"}  "${name}. `);
    }
}





