import React from 'react';
import brandLogo from './Cibus_Logo.png';
import { Link } from 'react-router-dom'; 

const NavBar = () => (

	<nav className="navbar navbar-expand-lg nvarbar-dark black">
		<a className="navbar-brand" href="/"><img src={brandLogo} width="100" height="100" alt=""/></a>
		<ul className="navbar-nav mr-auto center">
			<li className="li">
				<Link className="Link" to="/">Home</Link>
			</li>
			<li className="li">
				<Link className="Link" to="/account"> Account </Link>
			</li>
			<li className="li">
				<Link className="Link" to="/register"> Register</Link>
			</li>
			<li className="li">
				<Link className="Link" to="/recipe"> Recipe Finder </Link>
			</li>
			<li className="li">
				<Link className="Link" to="/menu-plan"> Menu Planner </Link>
			</li>
			<li className="li">
				<Link className="Link" to="/market-ingredient"> Market Ingredient </Link>
			</li>
		</ul>
	</nav>

);

export default NavBar;