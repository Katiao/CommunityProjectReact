import React, { useState, useRef } from 'react';
import './form.scss';
import Button from '../Button/button';

function Form() {
	//useRef to access form upon submission in order to validate form:
	const refContainer = useRef(null);
	//state for form inputs / controlled inputs
	const [person, setPerson] = useState({
		name: '',
		number: '',
		email: '',
		message: '',
	});
	//state for valid form submission:
	const [valid, setValid] = useState(false);

	const validateForm = () => {
		//validation using constraint API. Method on form will return boolean value
		const isValid = refContainer.current.checkValidity();
		// if form is valid, set state to true
		if (isValid) {
			setValid(true);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		validateForm();
		console.log(person);
		setPerson({ name: '', number: '', email: '', message: '' });
	};
	//using JS dynamic object property to update state as input changes:
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setPerson({ ...person, [name]: value });
	};

	return (
		<>
			<form className='contact-form' onSubmit={handleSubmit} ref={refContainer}>
				<label className='contact-form-name-label' htmlFor='name'>
					NAME
				</label>
				<input
					className='contact-form-name-input contact-form-input'
					type='text'
					id='name'
					name='name'
					placeholder='Full Name'
					value={person.name}
					onChange={handleChange}
					required
				/>

				<label className='contact-form-phone-label' htmlFor='number'>
					PHONE NUMBER
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
					title='Please include international dialling code (e.g. +49) followed by your phone number'
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
					placeholder='email@address.com'
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
					btnClass='yellow-button'
					text='SEND'
					className='contact-form-button'
				/>
			</form>

			{/* Success Message hidden by default, only appears when message submitted and valid state is true*/}
			<div
				className={`${
					valid ? 'message-container' : 'message-container hidden'
				}`}>
				<h3>Success! Form submitted</h3>
			</div>
		</>
	);
}

export default Form;
