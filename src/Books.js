import React from 'react';
import Book from './Book';

const Books = ({ books, deleteHandler, changeHandler }) => {
	return (
		<div className="mt-5">
			<ul>
				{books.map((book) => (
					<Book
						key={book.id}
						book={book}
						deleteHandler={deleteHandler}
						changeHandler={changeHandler}
					></Book>
				))}
			</ul>
		</div>
	);
};

export default Books;
