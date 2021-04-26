import React from 'react';
import './header.scss';

function Header() {
	return (
		<header className='hero'>
			<div className='hero-text'>
				<h1>I'm Katia</h1>
				<h3>Front-End Web Developer</h3>
				<button className='yellow-button'>Hire Me</button>
			</div>

			<img src='../../Images/katia-img.jpg' alt='photo of Katia' />
		</header>
	);
}

export default Header;
