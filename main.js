'use string'


console.log('The breakfast is at 09:00 in the room at 123:456'.match( /\b\d\d:\d\d\b/ ) ); // 09:00

//********************** */

let regexp = /\d\d[-:]\d\d/g;

console.log('The breakfast will be at 09:00 and the dinner will be at 15-00'.match(regexp)); // 09:00  15-00

//*************** */

let regexp2 = /\.{3,}/g;

console.log('Hello!... , How are you?.....'.match(regexp2)); // ...,   .....

//*************** */

let regexp3 = /#[a-f0-9]{6}/gi;

const str = 'color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 ';

console.log( str.match(regexp3) ); // // #121212, #AA00ef

//************** */
let regexp4 = /<!--.*?-->/gs;

let str1 = `... <!-- My -- comment
 test --> ..  <!----> ..
`;

alert( str1.match(regexp4) ); // '<!-- My -- comment \n test -->', '<!---->'

//***************** */

let regexp5 = /<[^<>]+>/g;

const str2 = '<> <a href="/"> <input type="radio"> <b>';

console.log( str2.match(regexp5) );

//***************** */

let regexp6 = /#([a-f0-9]{3}){1,2}\b/gi;

const str3 = 'color: #3f3; background-color: #AA00ef; and: #abcd';

console.log( str3.match(regexp6) ); // #3f3 #AA00ef