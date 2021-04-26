import './about-me.scss';

function AboutMe() {
	return (
		<section className='about-me'>
			<h2 className=''>About Me</h2>
			<div className='about-me-content'>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. <br />
					<br />
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
					dolore eu fugiat nu pariatur excepteur sint occaecat.
				</p>

				<div className='about-me-buttons'>
					<button className='yellow-button'>View Work</button>
					<button className='grey-button'>Download CV</button>
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
