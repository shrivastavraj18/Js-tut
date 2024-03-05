console.log('We are at tut 6');
const name = 'Harry';
const greeting = 'Good Morning';
// console.log(greeting + ' ' + name);

let html;
html = "<h1> this is heading</h1>"+
        "<p> this is my para</p>";

html.concat('this');
// console.log(html);

// console.log(html.indexOf('<'));
// console.log(html.lastIndexOf('<'));
// console.log(html.charAt(3));
// console.log(html.endsWith('safsdaf'));
// console.log(html.includes(' fg'));
// console.log(html.substring(1,6));
// console.log(html.slice(0, 4));
// console.log(html.split('>'));
// console.log(html.replace('this', 'it'));

let fruit1 = 'Orange';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h1> This is heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml;