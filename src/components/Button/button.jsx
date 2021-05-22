import './button.scss';

function Button({ text, btnClass }) {
	return (
		<div>
			<button type='submit' className={btnClass}>
				{text}
			</button>
		</div>
	);
}

export default Button;
