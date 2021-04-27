import './about-me.scss';
import Button from '../Button/button';
import Heading2 from '../Heading-2/heading-2';

function AboutMe() {
	return (
		<section className='about-me'>
			<Heading2 text='About Me' />
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
					<Button btnClass='yellow-button' text='View Work' />
					<Button btnClass='grey-button' text='Download CV' />
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
