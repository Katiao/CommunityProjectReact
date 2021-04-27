import './closing.scss';

function Closing() {
	return (
		<section className='closing'>
			<div className='closing-logo'>K.</div>
			<p>
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
				officia <br /> deserunt mollit anim id est laborum.
			</p>
			<ul>
				<li>
					<a href='#'>
						<i className='fab fa-facebook-square'></i>
					</a>
					&nbsp;
				</li>
				<li>
					<a href='#'>
						<i className='fab fa-twitter-square'></i>
					</a>
					&nbsp;
				</li>
				<li>
					<a href='#'>
						<i className='fab fa-linkedin'></i>
					</a>
					&nbsp;
				</li>
				<li>
					<a href='#'>
						<i className='fab fa-pinterest-square'></i>
					</a>
					&nbsp;
				</li>
			</ul>
		</section>
	);
}

export default Closing;
