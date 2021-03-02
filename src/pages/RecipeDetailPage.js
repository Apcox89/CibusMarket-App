import React, { useState, useEffect } from 'react';
import NotFoundPage from './NotFoundPage';
//import { useParams } from "react-router-dom";

const RecipeDetailPage = ({ match }) => {

        const recipeID = match.params.recipeID;
		const [recipeInfo, setRecipeInfo] = useState('');

            useEffect(() => {
                const fetchData = async () => {
                    const result = await fetch(`/recipe/${recipeID}`);
                    const body = await result.json();
                    setRecipeInfo(body);
                console.log(body);
            }
            fetchData();

            }, []);

    if(recipeInfo){
    return(
        <>		    
            <div className="recipe">
                <h3> Recipe Detail: </h3>
                <h4>Recipe Title: {recipeInfo.RecipeTitle}</h4>
                {recipeInfo.Ingredients.map((item, i) => (
                        <ul key={i}> 
                            <li>Ingredient Name: {item.ingredientName}</li>
                        </ul>
                ))}
            </div>          
        </>
        );
    } else return <NotFoundPage/>
}

export default RecipeDetailPage;