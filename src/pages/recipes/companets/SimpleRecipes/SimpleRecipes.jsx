import { useEffect, useState } from 'react';
import './simpleRecipes.scss';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

export default function SimpleRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/recipes')
      .then(({ data }) => setRecipes(data?.recipes))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <section className="container recipesCount">
        <h2>Simple and tasty recipes</h2>
        <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt</p>

        <div className="recipes-list">
          {recipes?.map((recipe) => (
            <NavLink 
              key={recipe.id} 
              to={`/recipes-page/${recipe.id}`} 
              className="recipe-card"
            >
              <img src={recipe.image} alt={recipe.name} />
              <div className="card-info">
                <h3>{recipe.name}</h3>
                <span> {recipe.prepTimeMinutes} mins • {recipe.cuisine}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </section>
    </div>
  );
}
