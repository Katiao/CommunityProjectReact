import './contact-info.scss';

function ContactInfo() {
	return (
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
						<a href='https://www.facebook.com/'>
							<i className='fab fa-facebook-f'></i>
						</a>{' '}
						&nbsp;
						<a href='https://twitter.com/'>
							<i className='fab fa-twitter'></i>
						</a>{' '}
						&nbsp;
						<a href='https://www.linkedin.com/'>
							<i className='fab fa-linkedin-in'></i>
						</a>{' '}
						&nbsp;
						<a href='https://www.pinterest.com/'>
							<i className='fab fa-pinterest-p'></i>
						</a>
					</span>
				</li>
			</ul>
		</div>
	);
}

export default ContactInfo;
