

import {searchBtn} from './elements.js'
import {SearchView} from './view/searchView.js '
import {searchModel} from './model/searchModel.js';
import {recipeDetailsModel} from './model/recipeDetailsModel.js'
import {displayRecipeDetails} from './view/recipeDetailsView.js '

let controlSearch = () =>
{
    let result = new SearchView();
    let query = result.getSearchInputValue(); 
    let search = new searchModel(query);
    search.getSearchResults(result.displaySearchResults);
}

searchBtn.addEventListener('click',controlSearch);

let controlRecipe = ()=>
{

    let recipeId = window.location.hash.replace('#','');
    let recipeDeatil = new recipeDetailsModel(recipeId);
    recipeDeatil.getRecipeDetailsModel(displayRecipeDetails);
}


window.addEventListener('hashchange',controlRecipe)