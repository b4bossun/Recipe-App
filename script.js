const appID = 'afe13d9d';
const apiKey = 'e202b620303060f7b7d060724a22139b';
const searchButton = document.querySelector('.searchbutton'); // using class selector instead of ID
const recipeInput = document.querySelector('.inputbox'); // using class selector instead of ID
const ingredientsDisplay = document.getElementById('section1ID');
const instructionsDisplay = document.getElementById('section2ID');

function handleAddRecipe() {
    const searchTerm = recipeInput.value;
    const apiEndpoint = `https://api.edamam.com/search?q=${searchTerm}&app_id=${appID}&app_key=${apiKey}`;

    // Fetch data from the API
    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            const recipe = data.hits[0].recipe;
            const ingredients = recipe.ingredientLines.join(', ');
            const instructions = recipe.url;

            // Displaying ingredients and instructions
            ingredientsDisplay.textContent = `Ingredients: ${ingredients}`;
            instructionsDisplay.innerHTML = `Cooking Instructions: <a href="${instructions}" target="_blank">${instructions}</a>`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            ingredientsDisplay.textContent = 'No recipe found for the given search term.';
            instructionsDisplay.textContent = '';
        });
}

searchButton.addEventListener('click', handleAddRecipe);
