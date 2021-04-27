import './heading-2.scss';

function Heading2({ text, headingClass }) {
	return (
		<div>
			<h2 className={headingClass}>{text}</h2>
		</div>
	);
}

export default Heading2;
