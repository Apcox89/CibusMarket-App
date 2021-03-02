import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import NotFoundPage from './NotFoundPage';
//import IngredientsList from '../components/IngredientsList';
//import ReactDOM from 'react.dom';

function MenuPlanPage() {

	const [apiInfo, setApiInfo] = useState();

	useEffect(() => {
		 fetch(`/ingredient/`)
		.then((response) => response.json())
		.then(setApiInfo)
		console.log(apiInfo);

	}, []);

	if(apiInfo){

	return(
		<>
		<div className="recipe">		
		{apiInfo.Ingredients.map((item, i) => (
			<ul key={i}> 
				<li>Category:{item.ingredientCategory}</li>
				<li>Ingredient Name: {item.ingredientName}</li>
				<li>Description: {item.ingredientDescription}</li>
			</ul>
		))}
		</div>		
		</>
	) } else{
		return <NotFoundPage/>
	}

}

export default MenuPlanPage;