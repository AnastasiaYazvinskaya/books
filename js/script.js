/*async function getData() {
	dataBooks = await fetch("js/dataBooks.json");
}

getData();
document.getElementById('books-for-you').innerHTML = dataBooks.json();*/

fetch('https://anastasiayazvinskaya.github.io/bookshelf/books/js/test.json')
	.then((response) => response.json())
	.then((json) => document.getElementById('books-for-you').innerHTML = (json));