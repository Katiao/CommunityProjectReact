import './services.scss';
import Heading2 from '../Heading-2/heading-2';
import ServiceCard from '../Service-Card/service-card';

const servicesContent = [
	{
		cardClass: 'card card1',
		iconClass: 'fas fa-mobile-alt fa-4x',
		title: 'Consulting',
		description:
			'Duis aute irure dolor in reprehenderit in voluptate, velit esse cillum dolore eu fugiat',
	},
	{
		cardClass: 'card card2',
		iconClass: 'fas fa-window-restore fa-4x',
		title: 'Web Development',
		description:
			'Duis aute irure dolor in reprehenderit in voluptate, velit esse cillum dolore eu fugiat',
	},
	{
		cardClass: 'card card3',
		iconClass: 'fab fa-apple-pay fa-4x',
		title: 'Web App Design',
		description:
			'Duis aute irure dolor in reprehenderit in voluptate, velit esse cillum dolore eu fugiat',
	},
	{
		cardClass: 'card card4',
		iconClass: 'fas fa-palette fa-4x',
		title: 'Web Design',
		description:
			'Duis aute irure dolor in reprehenderit in voluptate, velit esse cillum dolore eu fugiat',
	},
];

function Services() {
	return (
		<section className='services'>
			<div className='services-text-box'>
				<Heading2 text='Services' />
				<p>
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
					officia deserunt mollit anim id <br />
					est laborum. Sed ut perspiciatis unde omnis iste natur
				</p>
			</div>
			<div className='services-cards'>
				{servicesContent.map(service => {
					return <ServiceCard service={service} />;
				})}
			</div>
		</section>
	);
}

export default Services;
