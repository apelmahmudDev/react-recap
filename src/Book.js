import React, { useState } from 'react';

const Book = ({ book, deleteHandler, changeHandler }) => {
	const [isEditable, setIsEditable] = useState(false);
	const changeKeyHandler = (event) => {
		console.log(event.target.key);
	};
	return (
		<li className="d-flex justify-content-between border p-1">
			{isEditable ? (
				<input
                    onChange={(e) => changeHandler(e.target.value, book.id)}
                    // onKeyPress={changeKeyHandler}
					type="text"
					placeholder="Rename the name"
					value={book.name}
				/>
			) : (
				<p>{book.name}</p>
			)}
			<div className="d-flex align-items-center">
				<p>$ {book.price}</p>
				<button onClick={() => setIsEditable(true)} className="btn btn-primary">
					Edit
				</button>
				<button
					onClick={() => deleteHandler(book.id)}
					className="btn btn-danger"
				>
					Delete
				</button>
			</div>
		</li>
	);
};

export default Book;
