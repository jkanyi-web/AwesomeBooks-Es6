/**
 * eslint-disable
 *
 * @format
 */

import { DateTime } from './modules/luxon.js';
import showDiv from './modules/showDiv.js';
import BookCollection from './modules/BookCollection.js';

const addBtn = document.getElementById('add-books');
addBtn.style.cursor = 'pointer';
const bookCollection = new BookCollection();

function addContent() {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  if (title.value === '' || author.value === '') {
    addBtn.removeEventListener('click');
  } else {
    bookCollection.addBook(title.value, author.value);
    title.value = '';
    author.value = '';
  }
}

document.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    addContent();
  }
});

addBtn.addEventListener('click', addContent);

if (localStorage.getItem('books')) {
  bookCollection.books = JSON.parse(localStorage.getItem('books'));
  bookCollection.displayBooks();
}

/* Date and time */

const dt = DateTime.now();
document.getElementById('datetime').innerHTML = dt.toISO();

const links = document.querySelectorAll('.nav-menu a');
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    showDiv(href.replace('#', ''), link);
  });
});
