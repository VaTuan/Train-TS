const count9Character = (maxNumber, numberFind) => {
    const arrInt = [];
    let count9 = 0;
    for (let i = 0; i <= maxNumber; i++) {
        arrInt.push(i);
    }
    for (let number of arrInt) {
        const compare9 = Array.from(String(number), Number).filter(e => e === numberFind).length;
        count9 += compare9;
    }
    return count9;
};
const kq = count9Character(15000000, 1);
console.log('ket qua : ', kq); // => 16000001
