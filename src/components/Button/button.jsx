import React, { useState } from 'react';
import './button.scss';

function Button({ btnClass, text, message }) {
	const [state, setState] = useState(false);

	function handleClickButton() {
		setState(prevState => !prevState);
	}

	return (
		<div onClick={handleClickButton}>
			<button type='button' className={btnClass}>
				{text}
			</button>
			{state && <p>{message}</p>}
		</div>
	);
}

export default Button;
