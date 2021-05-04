import './contact-me.scss';
import Heading2 from '../Heading-2/heading-2';
import ContactInfo from '../Contact-Info/contact-info';
import Form from '../Form/form';

function ContactMe() {
	return (
		<section className='contact'>
			<div className='contact-title'>
				<Heading2 text='Contact Me' headingClass='contact-me' />
			</div>
			<ContactInfo />
			<Form />
		</section>
	);
}

export default ContactMe;
