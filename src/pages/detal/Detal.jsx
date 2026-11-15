import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./detal.scss";

export default function Detal() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/recipes/${id}`)
      .then(({ data }) => setRecipe(data))
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div className="detail-container">
      <Link to="/recipes-page" className="back-btn">
        ← Назад к списку
      </Link>

      <div className="detail-card">
        <div className="detail-image">
          <img src={recipe?.image} alt={recipe?.name} />
        </div>

        <div className="detail-info">
          <h1>{recipe?.name}</h1>
          
          <div className="detail-meta">
            <span className="badge">{recipe?.cuisine}</span>
            <span> Prep time: {recipe?.prepTimeMinutes} mins</span>
          </div>

          <h3>Ингредиенты:</h3>
          <ul className="ingredients-list">
            {recipe?.ingredients?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h3>Инструкция по приготовлению:</h3>
          <ol className="instructions-list">
            {recipe?.instructions?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}


