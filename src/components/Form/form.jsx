import React, { useState } from 'react';
import './form.scss';
import Button from '../Button/button';

function Form() {
	const [person, setPerson] = useState({
		name: '',
		number: '',
		email: '',
		message: '',
	});

	const handleSubmit = e => {
		e.preventDefault();
		if (person.name && person.email && person.message) {
			alert('Message Submitted');
		}
		setPerson({ name: '', number: '', email: '', message: '' });
	};
	//using JS dynamic object property
	const handleChange = e => {
		const name = e.target.name;
		const value = e.target.value;
		setPerson({ ...person, [name]: value });
	};

	return (
		<form className='contact-form'>
			<label className='contact-form-name-label' htmlFor='name'>
				NAME
			</label>
			<input
				className='contact-form-name-input contact-form-input'
				type='text'
				id='name'
				name='name'
				placeholder='Type your name'
				value={person.name}
				onChange={handleChange}
				required
			/>

			<label className='contact-form-phone-label' htmlFor='number'>
				PHONE NUMBER (Incl. International dialing code )
			</label>
			<input
				className='contact-form-phone-input contact-form-input'
				type='text'
				id='number'
				name='number'
				placeholder='Use format +49 408XXXXXXX'
				value={person.number}
				onChange={handleChange}
				pattern='^\+(?:[0-9] ?){6,14}[0-9]$'
				required
			/>

			<label className='contact-form-email-label' htmlFor='email'>
				EMAIL
			</label>
			<input
				className='contact-form-email-input contact-form-input'
				type='email'
				id='email'
				name='email'
				placeholder='Type your email address'
				value={person.email}
				onChange={handleChange}
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
				value={person.message}
				onChange={handleChange}
				cols='40'
				rows='8'
				required></textarea>

			<Button
				btnClass='contact-form-button yellow-button'
				text='Send Message'
				type='submit'
				onClick={handleSubmit}
			/>
		</form>
	);
}

export default Form;
