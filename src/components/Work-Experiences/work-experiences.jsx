import './work-experiences.scss';
import Heading2 from '../Heading-2/heading-2';

function WorkExperiences() {
	return (
		<section className='work-experiences'>
			<Heading2 text='Work Experiences' />
			<p className='center'>
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
				officia deserunt mollit anim id <br /> est laborum. Sed ut perspiciatis
				unde omnis iste natus
			</p>

			<div className='works-cards-container'>
				<div className='works-card'>
					<div className='date'>JUNE 2018 - 2019</div>
					<h3>Web Developer</h3>
					<div className='company'>Company inc.</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
						feugiat felis, eu sodales est.
					</p>
				</div>
				<div className='works-card'>
					<div className='date'>JUNE 2019 - 2019</div>
					<h3>Web Developer</h3>
					<div className='company'>Company inc.</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
						feugiat felis, eu sodales est.{' '}
					</p>
				</div>
				<div className='works-card'>
					<div className='date'>JUNE 2020 - PRESENT</div>
					<h3>Web Developer</h3>
					<div className='company'>Company inc.</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
						feugiat felis, eu sodales est.
					</p>
				</div>
			</div>
		</section>
	);
}

export default WorkExperiences;
