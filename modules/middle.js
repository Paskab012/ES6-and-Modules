import { Library } from './logic.js';
import * as main from './logic.js';

const myLibrary = new Library();
main.addButton.addEventListener('click', (event) => {
  event.preventDefault();
  myLibrary.addBook(main.niceTitle.value, main.theAuthor.value);
});

document.addEventListener('DOMContentLoaded', () => {
  myLibrary.getLocalStorage();
});

export default myLibrary;
