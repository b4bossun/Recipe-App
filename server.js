const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// Database connection setup (using a hypothetical database module)
const db = require('./db');

// API endpoints
app.get('/api/recipes', (req, res) => {
    // Code to fetch recipes from the database
    const recipes = db.getRecipes();
    res.json(recipes);
});

app.post('/api/recipes', (req, res) => {
    // Code to add a new recipe to the database
    const newRecipe = req.body;
    db.addRecipe(newRecipe);
    res.json({ message: 'Recipe added successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
