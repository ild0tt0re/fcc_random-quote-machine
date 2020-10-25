// import { ReactComponent as Logo } from './assets/logo.svg';
import { useEffect, useState } from 'react';
import { CardQuote } from './components/CardQuote';
import './styles/App.css';

function App() {
  const [textQuote, setTextQuote] = useState('');
  const [authorQuote, setAuthorQuote] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  function fetchQuote() {
    const url =
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        const data = res.quotes;
        const quoteNum = Math.floor(Math.random() * data.length);
        const randomQuote = data[quoteNum];

        setTextQuote(randomQuote['quote']);
        setAuthorQuote(randomQuote['author']);
      })
      .catch((e) => console.log('error: ', e));
  }

  return (
    <div className="App vh-100">
      <div className="container px-4 d-flex justify-content-center align-items-center h-100">
        <CardQuote
          text={textQuote}
          author={authorQuote}
          fetchQuote={fetchQuote}
        />
      </div>
    </div>
  );
}

export default App;
