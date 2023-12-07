// Footer
const footer = document.createElement('footer');
const currentYear = new Date().getFullYear();
footer.innerHTML = `&copy; ${2023} Maximus Thiessen. All rights reserved.`;
document.body.appendChild(footer);

// Alert Button
const alertButton = document.getElementById('btn-alert');
alertButton.addEventListener('click', function () {
   alert('Hello world!');
});

// Hover Button
const hoverButton = document.getElementById('btn-hover');
hoverButton.addEventListener('mouseover', function () {
   hoverButton.innerText = 'New Button Label';
});

hoverButton.addEventListener('mouseleave', function () {
    hoverButton.innerText = 'Default Button Label';
 });

 // Incrementing Button
let count = 1;
const incrementButton = document.getElementById('btn-counter');
const counterText = document.getElementById('txt-counter');
incrementButton.addEventListener('click', function () {
   count++;
   counterText.textContent = `Number: ${count}`;
   
   // if-else statement for even or odd
   if (count % 2 === 0) {
      counterText.classList.remove('odd');
      counterText.classList.add('even');
   } else {
      counterText.classList.remove('even');
      counterText.classList.add('odd');
   }
});

// New JavaScript for New HTML Element 1
const newElement1 = document.getElementById('new-element-1');


// New JavaScript for New HTML Element 2
const newElement2 = document.getElementById('new-element-2');


// for Loops
const numbersList = document.getElementById('numbers');
for (let i = 1; i <= 100; i++) {
   const listItem = document.createElement('li');
   listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
   numbersList.appendChild(listItem);
}