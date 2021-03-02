import React, { useState, useEffect } from 'react';
import NotFoundPage from './NotFoundPage';

const MarketPage = ({ match }) => {

    const ingredientName = match.params.ingredientName;

    const [ingredientInfo, setingredientInfo] = useState('');

    useEffect(() => { 
        const reqBody = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ingredientName: ingredientName })
            };
            fetch(`/market-ingredient/${ingredientName}`, reqBody)
              // .then((res) = res.json())
              // .then(data => setingredientInfo(data.ingredientName))


    }, [ingredientInfo]);

    return(
    <>
    <form class="recipe">
        <h1> Add Ingredient </h1>
        <label> Please enter an ingredient name: </label> <br/>
        <input type="text" value={ingredientName}></input> <br/>
        <input type="submit" value="Submit"></input>
    </form>
    </>
    );
}

export default MarketPage;