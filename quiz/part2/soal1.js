function palindrome(kata) {
    let bersih = kata.replace(/\s+/g, '').toLowerCase();
    let balik = '';
    for (let i = bersih.length - 1; i >= 0; i--) {
    balik += bersih[i];
    }
    return bersih === balik;
}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false