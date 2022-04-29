'use string'


console.log('The breakfast is at 09:00 in the room at 123:456'.match( /\b\d\d:\d\d\b/ ) ); // 9:00

//********************** */

let regexp = /\d\d[-:]\d\d/g;

console.log('The breakfast will be at 09:00 and the dinner will be at 15-00'.match(regexp));