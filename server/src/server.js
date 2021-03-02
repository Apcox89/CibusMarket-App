const express = require('express');
const path = require('path');
const app = express();

const cors = require('cors');
app.use(cors());

//app.use(express.json());
const bodyParser = require('body-parser');
const { resolveNaptr } = require('dns');
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
) 
//import bodyParser, { json } from 'body-parser'
//app.use(bodyParser.json())

var dbConnection = path.join(__dirname + '/market.db');
console.log(dbConnection);
const db = require('better-sqlite3')(dbConnection, { verbose: console.log });

var port = process.env.PORT || 3001;

app.get("/ok", (req, res) => {
  res.send({"message":"Ok"})
});

app.get('/', (req, res)=>{
     res.sendFile(path.join(__dirname + '/Bootstrap4.html')); 
});

app.route('/ingredient/').get((req, res) => res.send(JSON.stringify(getIngredient(), null, 2)) );

function getIngredient(){
  console.log("is working")

  var ingredient = {Ingredients: []}
  const ingredientsDB = db.prepare('SELECT * FROM Ingredient').all();
  var ingredients = ingredientsDB;
  ingredient.Ingredients = ingredients;
  console.log(ingredient);

  return ingredient;
}

app.route('/recipe/:recipeID')
  .get((req, res) =>
  res.send(JSON.stringify(getRecipe(req.params.recipeID), null, 2)) );

function getRecipe(RecipeID) {
   
    var recipe = {RecipeTitle:"Template", Ingredients:[]};
    const row = db.prepare('SELECT * FROM Recipe WHERE recipeId = ' + RecipeID).get();
    recipe.RecipeTitle = row.recipeTitle
    
    const ingredientsDB = db.prepare('SELECT ingredientName FROM [vwRec-Ing] WHERE recipe_Id = ' + RecipeID).all();
    var ingredients = ingredientsDB;    
    
    recipe.Ingredients = ingredients;
    return recipe;
} 

app.route('/recipelist')
  .get((req, res) =>
  res.send(JSON.stringify(getRecipeList(req.body.recipe), null, 2)) );
  
function getRecipeList() {
    // We will be getting this from the database !!!!!!
    var recipe = {Recipe: "Info"};
    const recipeDB = db.prepare('SELECT * FROM Recipe').all();
    var recipes = recipeDB;
    recipe.Recipe = recipes;

    return recipe;
}

app.post('/market-ingredient/:ingredientName', (req, res) =>{

  var ingredient = {Ingredient: ingredient}
  console.log("Request Body: ", req.body);
  //need to define the req body
  res.json(`New ${req.params.ingredientName}`);

  //getting run is not a function because of non-async
 /* var Ingredient = {ingredientName: req.body.ingredientName }
 
  var sql= `INSERT INTO Ingredient(ingredientName) VALUES(?)`
  var params = [Ingredient.ingredientName]
  db.run(sql, params, function(err, res){
    if(err){
      res.status(400).json({"error": err.message})
      return;
    }
    res.json({
      "params": params
    })
  }, res); */

}); 

/*app.route('/market-ingredient/:ingredientName')
  .post((req, res) =>
  res.send(JSON.stringify(postIngredient(req.params.ingredientName), null, 2)) );

function postIngredient(IngredientName) {

  var IngredientName = {ingredientName: "request body" }
 
  var sql= 'INSERT INTO Ingredient(ingredientName) VALUES(?)'
  var params = [IngredientName.ingredientName]
  db.run(sql, params, function(err, res){
    if(err){
      res.status(400).json({"error": err.message})
      return;
    }
    res.json({
      "params": params
    })
  });   
  
}; */

app.listen(port, ()=>{
  console.log('App initalized on port ' + port);
})

//end of file