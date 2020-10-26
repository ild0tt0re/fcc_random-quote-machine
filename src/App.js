import { useEffect, useState } from 'react';
import { CardQuote } from './components/CardQuote';
import './styles/App.scss';

function App() {
  const [textQuote, setTextQuote] = useState('');
  const [authorQuote, setAuthorQuote] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  function fetchQuote() {
    const url =
      'https://gist.githubusercontent.com/ild0tt0re/21a9102be49ef1308232c5e24d40d06e/raw/c1a4bbd815d2dbc239d51daf8610e34c5dddd446/fcc-quotes.json';
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
