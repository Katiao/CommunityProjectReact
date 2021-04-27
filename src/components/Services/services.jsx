import './services.scss';
import Heading2 from '../Heading-2/heading-2';

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
				<div className='card card1'>
					<i className='fas fa-mobile-alt fa-4x'></i>
					<h3>Consulting</h3>
					<p>
						Duis aute irure dolor in reprehenderit in voluptate
						<br />
						velit esse cillum dolore eu fugiat
					</p>
				</div>
				<div className='card card2'>
					<i className='fas fa-window-restore fa-4x'></i>
					<h3>Web Development</h3>
					<p>
						Duis aute irure dolor in reprehenderit in voluptate
						<br />
						velit esse cillum dolore eu fugiat
					</p>
				</div>
				<div className='card card3'>
					<i className='fab fa-apple-pay fa-4x'></i>
					<h3>Web App Design</h3>
					<p>
						Duis aute irure dolor in reprehenderit in voluptate
						<br />
						velit esse cillum dolore eu fugiat
					</p>
				</div>
				<div className='card card4'>
					<i className='fas fa-palette fa-4x'></i>
					<h3>Web Design</h3>
					<p>
						Duis aute irure dolor in reprehenderit in voluptate
						<br />
						velit esse cillum dolore eu fugiat
					</p>
				</div>
			</div>
		</section>
	);
}

export default Services;
