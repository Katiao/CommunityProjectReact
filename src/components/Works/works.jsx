import React from 'react';
import './works.scss';

function Works({ works }) {
	return (
		<div className='latest-works-cards'>
			{works.map(work => {
				const { id, title, className, cssId, subtitle, img } = work;
				return (
					<div key={id} className={className}>
						<img id={cssId} src={img} alt={title} />
						<div className='overlay1 overlay'>
							<i className='fas fa-search'></i>
							<h3>{title}</h3>
							<p>{subtitle}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default Works;
