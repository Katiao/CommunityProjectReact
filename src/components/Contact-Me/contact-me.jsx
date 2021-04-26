import './contact-me.scss';

function ContactMe() {
	return (
		<section className='contact'>
			<div className='contact-title'>
				<h2>Contact Me</h2>
			</div>
			<div className='contact-info'>
				<h4>Contact Info</h4>
				<ul>
					<li>
						<i className='fas fa-search-location'></i> Munich, Germany
					</li>{' '}
					<br />
					<li>
						<i className='fas fa-envelope-square'></i>
						{'  '} katia@example.com
					</li>{' '}
					<br />
					<li>
						<i className='fas fa-phone'></i>
						{'  '}+49123456789xxxx <br /> {'     '} +49123456789xxx
					</li>{' '}
					<br />
					<li>
						<i className='fas fa-wifi'></i>
						{'  '}www.google.com
					</li>{' '}
					<br />
					<li>
						<span className='follow-me'> Follow Me</span>
					</li>{' '}
					<br />
					<li>
						<span className='follow' />
						<a href='#'>
							<i className='fab fa-facebook-f'></i>
						</a>{' '}
						{'  '}
						<a href='#'>
							<i className='fab fa-twitter'></i>
						</a>{' '}
						{'  '}
						<a href='#'>
							<i className='fab fa-linkedin-in'></i>
						</a>{' '}
						{'  '}
						<a href='#'>
							<i className='fab fa-pinterest-p'></i>
						</a>
					</li>
				</ul>
			</div>
			<form className='contact-form' id='form' action=''>
				<label className='contact-form-name-label' for='name'>
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

				<label className='contact-form-phone-label' for='number'>
					PHONE NUMBER
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

				<label className='contact-form-email-label' for='email'>
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

				<label className='contact-form-message-label' for='message'>
					YOUR MESSAGE
				</label>
				<textarea
					className='contact-form-message-input contact-form-input'
					minlength='10'
					id='message'
					name='message'
					placeholder='Your Message'
					cols='40'
					rows='8'
					required></textarea>

				<input
					className='contact-form-button yellow-button'
					type='submit'
					value='SEND MESSAGE'
				/>
			</form>
		</section>
	);
}

export default ContactMe;
