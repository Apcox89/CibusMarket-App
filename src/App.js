import React, { Component } from 'react';
import  {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import RegisterPage from './pages/RegisterPage';
import MenuPlanPage from './pages/MenuPlanPage';
import MarketPage from './pages/MarketPage';
import AccountPage from './pages/AccountPage';
import NotFoundPage from './pages/NotFoundPage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import NavBar from './NavBar';
import './App.css';

function App() {
  return (
  <Router>
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/" component={HomePage} exact/>
        <Route path="/recipe" component={RecipePage}/>
        <Route path="/recipeing/:recipeID" component={RecipeDetailPage}/>
        <Route path="/register" component={RegisterPage}/>
        <Route path="/menu-plan" component={MenuPlanPage}/>
        <Route path="/account" component={AccountPage}/>
        <Route path="/market-ingredient" component={MarketPage}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;