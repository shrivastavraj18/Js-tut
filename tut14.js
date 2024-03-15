console.log('Welcome to tut14');

let element = document.getElementById('myfirst');
//element= element.className
// element= element.childNodes
// element= element.parentNode
element.style.color = 'red';
element.innerText = 'Vansh is a good boy';
element.innerHTML = '<b>Vansh is a good boy</b>';


// console.log(element);

let sel = document.querySelector('#myfirst');
sel = document.querySelector('.child');
sel = document.querySelector('div');
sel.style.color = 'green';

// console.log(sel)

let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
elems = document.getElementsByTagName('div');
console.log(elems);

Array.from(elems).forEach(element => {
    console.log(element);
    element.style.color = 'blue';
})

// console.log(elems[0].getElementsByClassName('child'));

