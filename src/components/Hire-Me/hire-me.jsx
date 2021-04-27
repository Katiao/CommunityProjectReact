import './hire-me.scss';
import Button from '../Button/button';

function HireMe() {
	return (
		<section className='hire-me'>
			<h2>Have a Project in Mind?</h2>
			<Button
				btnClass='grey-button'
				text='Hire Me'
				message='Send me an email at katia@example.com or send me a message using the contact form below'
			/>
		</section>
	);
}

export default HireMe;
