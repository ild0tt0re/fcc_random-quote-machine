// import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as ChatQuote } from './assets/chat-quote.svg';
import './styles/App.css';

function App() {
  return (
    <div className="App vh-100">
      <div class="container px-4 d-flex justify-content-center align-items-center h-100">
        <div id="quote-box" class="card shadow-sm">
          {/* <Logo /> */}
          <div class="card-body p-4">
            <blockquote class="blockquote mb-0 text-center">
            <ChatQuote className="h1 mb-3" />
              <p id="text" class="h1 mb-3 px-4">
                I am not a product of my circumstances. I am a product of my
                decisions.
              </p>
              <footer class="blockquote-footer pt-1">
                <address class="author d-inline">
                  By{' '}
                  <a
                    id="author"
                    class="text-decoration-none"
                    rel="author"
                    href="#"
                  >
                    John Doe
                  </a>
                </address>
              </footer>
            </blockquote>

            {/* href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)" */}
            <a id="tweet-quote" title="Tweet this quote!" target="_blank">
              Tweet quote
            </a>
            <button
              id="new-quote"
              class="btn btn-primary mb-2 mt-4 d-block mx-auto"
            >
              Generate new quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
