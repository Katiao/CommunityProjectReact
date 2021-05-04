import './navigation.scss';
import { FaBars } from 'react-icons/fa';
import links from './data';

function Navigation() {
	return (
		<nav className='nav-center'>
			<div className='nav-header'>
				<div className='logo'>
					<a href='index.html'>K.</a>
				</div>
				<button className='nav-toggle'>
					<FaBars />
				</button>
			</div>
			<div className='links-container'>
				<ul className='links'>
					<li>
						<a className='menu' href='#'>
							Home
						</a>
					</li>
					<li>
						<a className='menu' href='#'>
							About Me
						</a>
					</li>
					<li>
						<a className='menu' href='#'>
							Services
						</a>
					</li>
					<li>
						<a className='menu' href='#'>
							Portfolio
						</a>
					</li>
					<li>
						<a className='menu' href='#'>
							Contact
						</a>
					</li>
					<li>
						<a className='menu' href='#'>
							Blog
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navigation;
