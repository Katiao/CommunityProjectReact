import './services.scss';
import Heading2 from '../Heading-2/heading-2';
import ServiceCard from '../Service-Card/service-card';
import { servicesData } from './services-data';

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
				{servicesData.map(service => {
					return <ServiceCard key={service.id} {...service} />;
				})}
			</div>
		</section>
	);
}

export default Services;
