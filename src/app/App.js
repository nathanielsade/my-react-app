import './App.css'
import Article from "../article/Article"
import articles from "../data/db.json"

function App() {
  return (
    <div className="App">
      {
      articles.map((article) =>   
        <Article {...article} />
      )
     }
    </div>
  );
}

export default App;