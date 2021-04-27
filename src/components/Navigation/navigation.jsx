import './navigation.scss';

function Navigation() {
	return (
		<div className='page-container'>
			<nav className='navbar'>
				<div className='navbar-logo'>
					<a href='index.html'>K.</a>
				</div>
				<button id='open' className='open'>
					<i className='fas fa-bars fa-2x'></i>
				</button>
				<ul>
					<li>
						<a className='navbar-menu' href='#'>
							Home
						</a>
					</li>
					<li>
						<a className='navbar-menu' href='#'>
							About Me
						</a>
					</li>
					<li>
						<a className='navbar-menu' href='#'>
							Services
						</a>
					</li>
					<li>
						<a className='navbar-menu' href='#'>
							Portfolio
						</a>
					</li>
					<li>
						<a className='navbar-menu' href='#'>
							Contact
						</a>
					</li>
					<li>
						<a className='navbar-menu' href='#'>
							Blog
						</a>
					</li>
				</ul>
			</nav>

			{/* Navigation for mobile toggle menu */}
			<div className='modal-container' id='modal'>
				<div className='logo'>
					<a href='index.html'>K.</a>
				</div>
				<button className='close-btn' id='close'>
					<i className='fa fa-times fa-2x'></i>
				</button>
				<nav>
					<ul>
						<li>
							<a className='menu-nav' href='#'>
								Home
							</a>
						</li>
						<li>
							<a className='menu-nav' href='#'>
								About Me
							</a>
						</li>
						<li>
							<a className='menu-nav' href='#'>
								Services
							</a>
						</li>
						<li>
							<a className='menu-nav' href='#'>
								Portfolio
							</a>
						</li>
						<li>
							<a className='menu-nav' href='#'>
								Contact
							</a>
						</li>
						<li>
							<a className='menu-nav' href='#'>
								Blog
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Navigation;
