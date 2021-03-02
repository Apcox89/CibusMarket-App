import React from 'react';
import homeLogo from '../Cibus-Market.png';

const HomePage = () => (

		<div class="containter">
			<h1 className="recipe"> Welcome to Cibus Market </h1>
			<img src={homeLogo} className="center" width="800" height="600"/>
		</div>
);

export default HomePage;