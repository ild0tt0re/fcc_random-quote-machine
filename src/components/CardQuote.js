import React from 'react';
import { ReactComponent as ChatQuote } from '../assets/chat-quote.svg';

export const CardQuote = ({ text, author, fetchQuote }) => {
  return (
    <div id="quote-box" className="card shadow-sm">
      {/* <Logo /> */}
      <div className="card-body p-4">
        <blockquote className="blockquote mb-0 text-center">
          <ChatQuote className="h1 mb-3" />
          <p id="text" className="h1 mb-3 px-4">
            {text}
          </p>
          <div className="blockquote-footer pt-1">
            <address className="author d-inline">
              By <span id="author" rel="author">{author}</span>
            </address>
          </div>
        </blockquote>
        <a
          id="tweet-quote"
          title="Tweet this quote!"
          rel="noreferrer"
          target="_blank"
          href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(
            `${text} - by ${author}`
          )}`}
        >
          Tweet quote
        </a>
        <button
          id="new-quote"
          className="btn btn-primary mb-2 mt-4 d-block mx-auto"
          onClick={fetchQuote}
        >
          Generate new quote
        </button>
      </div>
    </div>
  );
};
