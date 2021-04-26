import './latest-works.scss';

function LatestWorks() {
	return (
		<section className='latest-works'>
			<div className='latest-works-text-box'>
				<h2>Latest Works</h2>
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
						src='../../Images/card-six.jpg'
						alt='Latest Works Image 1'
					/>
					<div className='overlay1 overlay'>
						<i className='fas fa-search'></i>
						<h3>Project One</h3>
						<p>Sub-title</p>
					</div>
				</div>
				<div className='cardTwo cardhover'>
					<img src='images/card-two.jpg' alt='Latest Works Image 2' />
					<div className='overlay'>
						<i className='fas fa-search'></i>
						<h3>Project Two</h3>
						<p>Sub-title</p>
					</div>
				</div>
				<div className='cardThree cardhover'>
					<img src='images/card-three.jpg' alt='Latest Works Image 3' />
					<div className='overlay'>
						<i className='fas fa-search'></i>
						<h3>Project Three</h3>
						<p>Sub-title</p>
					</div>
				</div>
				<div className='cardFour cardhover'>
					<img src='images/card-four.jpg' alt='Latest Works Image 4' />
					<div className='overlay'>
						<i className='fas fa-search'></i>
						<h3>Project Four</h3>
						<p>Sub-title</p>
					</div>
				</div>
				<div className='cardFive cardhover'>
					<img src='images/card-five.jpg' alt='Latest Works Image 5' />
					<div className='overlay'>
						<i className='fas fa-search'></i>
						<h3>Project Five</h3>
						<p>Sub-title</p>
					</div>
				</div>
				<div className='cardSix cardhover'>
					<img src='images/card-eight.jpg' alt='Latest Works Image 6' />
					<div className='overlay'>
						<i className='fas fa-search'></i>
						<h3>Project Six</h3>
						<p>Sub-title</p>
					</div>
				</div>
				<div className='cardSeven cardhover'>
					<img src='images/card-seven.jpg' alt='Latest Works Image 7' />
					<div className='overlay'>
						<i className='fas fa-search'></i>
						<h3>Project Seven</h3>
						<p>Sub-title</p>
					</div>
				</div>
				<div className='cardEight cardhover'>
					<img
						id='wide-img'
						src='images/card_one.jpg'
						alt='Latest Works Image 8'
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
