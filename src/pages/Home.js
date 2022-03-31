import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import image from "../img/newsimg1.png"

//styles
import "./Home.css"

export default function Home() {
  const {data: articles, isPending, error } =useFetch(" http://localhost:3000/articles")
  
  return (
    <div className="home">
      <h2>Whats new in TECH</h2>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {articles && articles.map((article)=> (
        <div key={article.id} className="card">
          <img src={image} alt="img" className="article-image"/>
          <h3>{article.title}</h3>
          <p>{article.author}</p>
      <Link to={`/articles/${article.id}`}>
        <button>Read more</button>
      </Link>
           </div>
      ))}
    </div>
  );
}
