import './Article.css'
import { ReactComponent as Umbrella } from './umbrella.svg';

function Article({id, title, author, category, publication_date}) {
  return (
    <a href="article.html?id={id}">
        <article>
          <h3>{title}</h3>
          <span>{author}, <time>{publication_date}</time></span>
          <div>{category}</div>
          <Umbrella />
        </article>
    </a>
  );
}

export default Article; 