import './contact-me.scss';
import Button from '../Button/button';
import Heading2 from '../Heading-2/heading-2';

function ContactMe() {
	return (
		<section className='contact'>
			<div className='contact-title'>
				<Heading2 text='Contact Me' headingClass='contact-me' />
			</div>
			<div className='contact-info'>
				<h4>Contact Info</h4>
				<ul>
					<li>
						<i className='fas fa-search-location'></i>&nbsp; Munich, Germany
					</li>
					<br />
					<li>
						<i className='fas fa-envelope-square'></i>
						&nbsp; katia@example.com
					</li>
					<br />
					<li>
						<i className='fas fa-phone'></i>
						&nbsp; +49123456789xxxx <br /> &nbsp; &nbsp; &nbsp; +49123456789xxx
					</li>
					<br />
					<li>
						<i className='fas fa-wifi'></i>
						&nbsp; www.google.com
					</li>
					<br />
					<li>
						<span className='follow-me'> Follow Me</span>
					</li>
					<br />
					<li>
						<span className='follow'>
							<a href='#'>
								<i className='fab fa-facebook-f'></i>
							</a>{' '}
							&nbsp;
							<a href='#'>
								<i className='fab fa-twitter'></i>
							</a>{' '}
							&nbsp;
							<a href='#'>
								<i className='fab fa-linkedin-in'></i>
							</a>{' '}
							&nbsp;
							<a href='#'>
								<i className='fab fa-pinterest-p'></i>
							</a>
						</span>
					</li>
				</ul>
			</div>
			<form className='contact-form' id='form' action=''>
				<label className='contact-form-name-label' htmlFor='name'>
					NAME
				</label>
				<input
					className='contact-form-name-input contact-form-input'
					type='text'
					id='name'
					name='name'
					placeholder='Type your name'
					required
				/>

				<label className='contact-form-phone-label' htmlFor='number'>
					PHONE NUMBER (optional)
				</label>
				<div className='contact-form-number-control'>
					<input
						className='contact-form-phone-input contact-form-input'
						type='text'
						id='number'
						name='number'
						placeholder='Incl. international dialing code'
					/>
					<small>Error message</small>
				</div>

				<label className='contact-form-email-label' htmlFor='email'>
					EMAIL
				</label>
				<input
					className='contact-form-email-input contact-form-input'
					type='email'
					id='email'
					name='email'
					placeholder='Type your email address'
					required
				/>

				<label className='contact-form-message-label' htmlFor='message'>
					YOUR MESSAGE
				</label>
				<textarea
					className='contact-form-message-input contact-form-input'
					minLength='10'
					id='message'
					name='message'
					placeholder='Your Message'
					cols='40'
					rows='8'
					required></textarea>

				<Button
					btnClass='contact-form-button yellow-button'
					text='Send Message'
					type='submit'
				/>
			</form>
		</section>
	);
}

export default ContactMe;
