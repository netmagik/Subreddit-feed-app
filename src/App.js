import React, {useState, useEffect} from 'react';
import Article from './components/Article';

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubReddit] = useState('webdev');
  const [error, setError] = useState(false);

  useEffect(() => {
   
      const delay = setTimeout(() => {
        (async () => {
    await fetch (`https://www.reddit.com/r/${subreddit}.json`).then
      (res => {
        if (res.status !== 200) {
          console.log(res.status);
          return;
      }
      res.json().then(data => {
        if (data !== null) {
          setArticles(data.data.children);
          console.log(data.data)
          setError(false)
        }
      })
    } 
      ) // end of then (promise)
      .catch(
        err => {
          console.log(err)
          setError(true);
        }
      )
  })();
}, 500);
return () => clearTimeout(delay);
  }, [subreddit]);


  return (
    <div className="App">
      <header className="App-header">
      <h1>REDDIT API - Subreddit</h1>
        <span className="search-info">Enter to Search for Subreddit</span>
      <input 
        type="text" 
        className="subreddit_input" 
        value={subreddit}
        onChange={e => setSubReddit(e.target.value)} />
      </header>
      <div className="articles">
      { 
      (articles !== null && !error) ? articles.map((item, i) => 
        <Article key={i} item={item.data} />
      )
      : <p className="error">There is either a typo or no Reddit found. <br />
      </p>
      }
      </div>
    </div>
  );
}

export default App;
