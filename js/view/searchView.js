import {searchResultContainer,searchInput} from '../elements.js'

export class SearchView
{

    constructor()
    {

    }
    getSearchInputValue = () => searchInput.value;


      displaySearchResults(recipes)
        {
            let markUp = ``;

         


            for(let i = 0; i< recipes.length;i++)
            {

                markUp += `

              <div class="media py-5">       
              <img src="${recipes [i].image_url}" class="align-self-center mr-3 rounded-circle" alt="...">
              <div class="media-body">
              <a href="#${recipes[i].recipe_id}">
                <h6 class="mt-0">${recipes[i].title}</h6>
                <p>${recipes[i].publisher}</p>       
                </a>           
            </div>
                      </div>
                `
            }

            searchResultContainer.innerHTML = markUp;
        }
    
}