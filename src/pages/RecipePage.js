import React, { useState, useEffect } from 'react';
import NotFoundPage from './NotFoundPage';
import RecipeDetailPage from './RecipeDetailPage';
import { Link } from 'react-router-dom'; 
//import ReactDOM from 'react.dom';
//import RecipeList from '../components/RecipeList';

function RecipePage() {

		//const recipeID = match.params.recipeId;

		//const findRecipe = recipeID => findRecipe.recipeId === recipeID;

		const [recipeInfo, setRecipeInfo] = useState();

		useEffect(() => {
				fetch(`/recipelist/`)
				.then((response) => response.json())
				.then(setRecipeInfo)
			console.log(recipeInfo);
		}

	, []);

	if (!recipeInfo) return <NotFoundPage/>

	if(recipeInfo){

	/*var recipeParam = (recipeInfo) => {
		const details = recipeInfo.recipeId;
		const stringData = details.map(({recipeId}) => `${recipeId}`).join(',');
		console.log(stringData);
	};

	recipeParam(); */

	return(
		<>		
			
			<div className="recipe">
				<h3> Find a Recipe: </h3>
				<select>
					{recipeInfo.Recipe.map((item, i) => (
							<option key={i} value="key">{item.recipeId} {item.recipeTitle}</option>
				
					))}
				</select>
				<br />
				<h4> {recipeInfo.recipeId}</h4>
				<br />
					<Link to='RecipeDetailPage/:recipeInfo.recipeId'>		
						<button type="button" class="btn primary">
							See Recipe
						</button>
					</Link>
				<br/>
			</div>
			
		</>
		) } else { return <NotFoundPage/>}

		/*function Link({ param }) {

			param = recipeInfo.Recipe.recipeId;

			return(
				<div>
					{param ? ( <h1> &quot;{param}&quot;</h1>

				) : (
					<h3>Param does not exist</h3>
				)}
				</div>
			); 

		} */

}

export default RecipePage;
