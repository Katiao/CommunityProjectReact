import './closing.scss';

function Closing() {
	return (
		<section className='closing'>
			<h2 className='closing-logo'>K.</h2>
			<p>
				Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
				officia <br /> deserunt mollit anim id est laborum.
			</p>
			<ul>
				<li>
					<a href=''>
						<i className='fab fa-facebook-square'></i>
					</a>
					&nbsp;
				</li>
				<li>
					<a href=''>
						<i className='fab fa-twitter-square'></i>
					</a>
					&nbsp;
				</li>
				<li>
					<a href=''>
						<i className='fab fa-linkedin'></i>
					</a>
					&nbsp;
				</li>
				<li>
					<a href=''>
						<i className='fab fa-pinterest-square'></i>
					</a>
					&nbsp;
				</li>
			</ul>
		</section>
	);
}

export default Closing;
