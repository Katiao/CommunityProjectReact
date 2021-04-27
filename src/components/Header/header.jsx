import './header.scss';
import Button from '../Button/button';
import heroImg from '../../Assets/Images/katia-img.jpg';

function Header() {
	return (
		<header className='hero'>
			<div className='hero-text'>
				<h1>I'm Katia</h1>
				<h3>Front-End Web Developer</h3>
				<Button
					btnClass='yellow-button'
					text='Hire Me'
					message='Send me an email at katia@example.com or send me a message using the contact form below'
				/>
			</div>
			<img src={heroImg} alt='Katia' />
		</header>
	);
}

export default Header;
