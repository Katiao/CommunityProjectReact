import Heading2 from '../Heading-2/heading-2';
import './latest-works.scss';

function LatestWorks() {
	return (
		<section className='latest-works'>
			<div className='latest-works-text-box'>
				<Heading2 text='Latest Works' />
				<p>
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
					officia deserunt mollit anim id <br />
					est laborum. Sed ut perspiciatis unde omnis iste natus
				</p>
				<ul>
					<li>All</li>
					<li>Websites</li>
					<li>Web Apps</li>
					<li>Web tools</li>
					<li>Web Design</li>
				</ul>
			</div>

			<div className='latest-works-cards'>
				<div className='cardOne cardhover'>
					<img
						id='large-img'
						src='https://res.cloudinary.com/dhgtbuxtl/image/upload/v1619513775/card-six_kbha9z.jpg'
						alt='Latest Works 1'
					/>
					<div className='overlay1 overlay'>
						<i className='fas fa-search'></i>
						<h3>Project One</h3>
						<p>Sub-title</p>
					</div>
				</div>
				<div className='cardTwo cardhover'>
					<img
						src='https://res.cloudinary.com/dhgtbuxtl/image/upload/v1619513732/card-two_ffbfeu.jpg'
						alt='Latest Works 2'
					/>
					<div className='overlay'>
						<i className='fas fa-search'></i>
						<h3>Project Two</h3>
						<p>Sub-title</p>
					</div>
				</div>
				<div className='cardThree cardhover'>
					<img
						src='https://res.cloudinary.com/dhgtbuxtl/image/upload/v1619513747/card-three_n45iqu.jpg'
						alt='Latest Works 3'
					/>
					<div className='overlay'>
						<i className='fas fa-search'></i>
						<h3>Project Three</h3>
						<p>Sub-title</p>
					</div>
				</div>
				<div className='cardFour cardhover'>
					<img
						src='https://res.cloudinary.com/dhgtbuxtl/image/upload/v1619513755/card-four_a5swys.jpg'
						alt='Latest Works 4'
					/>
					<div className='overlay'>
						<i className='fas fa-search'></i>
						<h3>Project Four</h3>
						<p>Sub-title</p>
					</div>
				</div>
				<div className='cardFive cardhover'>
					<img
						src='https://res.cloudinary.com/dhgtbuxtl/image/upload/v1619513761/card-five_pmupac.jpg'
						alt='Latest Works 5'
					/>
					<div className='overlay'>
						<i className='fas fa-search'></i>
						<h3>Project Five</h3>
						<p>Sub-title</p>
					</div>
				</div>
				<div className='cardSix cardhover'>
					<img
						src='https://res.cloudinary.com/dhgtbuxtl/image/upload/v1619513788/card-eight_ry96qf.jpg'
						alt='Latest Works 6'
					/>
					<div className='overlay'>
						<i className='fas fa-search'></i>
						<h3>Project Six</h3>
						<p>Sub-title</p>
					</div>
				</div>
				<div className='cardSeven cardhover'>
					<img
						src='https://res.cloudinary.com/dhgtbuxtl/image/upload/v1619513781/card-seven_jz1byd.jpg'
						alt='Latest Works 7'
					/>
					<div className='overlay'>
						<i className='fas fa-search'></i>
						<h3>Project Seven</h3>
						<p>Sub-title</p>
					</div>
				</div>
				<div className='cardEight cardhover'>
					<img
						id='wide-img'
						src='https://res.cloudinary.com/dhgtbuxtl/image/upload/v1619513721/card_one_zst8t3.jpg'
						alt='Latest Works 8'
					/>
					<div className='overlay8 overlay'>
						<i className='fas fa-search'></i>
						<h3>Project Eight</h3>
						<p>Sub-title</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default LatestWorks;
