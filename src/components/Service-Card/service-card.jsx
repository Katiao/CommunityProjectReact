import './service-card.scss';

function ServiceCard({ cardClass, iconClass, title, description }) {
	const firstHalf = description.split(',')[0];
	const secondHalf = description.split(',')[1];

	return (
		<div className={cardClass}>
			<i className={iconClass}></i>
			<h3>{title}</h3>
			<p>
				{firstHalf}
				<br />
				{secondHalf}
			</p>
		</div>
	);
}

export default ServiceCard;
