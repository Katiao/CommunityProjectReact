import './hire-me.scss';
import Button from '../Button/button';
import Heading2 from '../Heading-2/heading-2';

function HireMe() {
	return (
		<section className='hire-me'>
			<Heading2 text='Have a Project in Mind?' />
			<Button
				btnClass='grey-button'
				text='Hire Me'
				message='Send me an email at katia@example.com or send me a message using the contact form below'
			/>
		</section>
	);
}

export default HireMe;
