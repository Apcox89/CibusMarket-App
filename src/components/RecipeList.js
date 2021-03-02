import React from 'react';

const RecipeList = ({recipes}) => (
	<>
	<h4> Recipe </h4>
	{recipes.map((recipe, key) => (
		<div className="recipe" key={key}>
			<h4>ID: {recipe.Id}</h4>
			<p>Title: {recipe.Title}</p>
		</div>
	))}
	</>
)

export default RecipeList; 