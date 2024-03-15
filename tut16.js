console.log('Welcome to tut16');
let element = document.createElement('li');
let text = document.createTextNode('I am a text node');
element.appendChild(text);

element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle');
// element.innerText = 'Hello this is created by vansh';


let ul = document.querySelector('ul.this');
ul.appendChild(element)

//console.log(ul);
//console.log(element);

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This node is a created for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2);

let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('us'));
myul.removeChild(document.getElementById('as'));

let pr = elem2.hasAttribute('class');
console.log(elem2, pr);

