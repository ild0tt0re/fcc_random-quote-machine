import React from 'react';
import './CardQuote.scss';
import { ReactComponent as ChatQuote } from '../assets/chat-quote.svg';
import { SocialBar } from './SocialBar';

export const CardQuote = ({ text, author, fetchQuote }) => {
  return (
    <div id="quote-box" className="card shadow-sm">
      <div className="card-body p-4">
        <blockquote className="blockquote mb-0 text-center">
          <ChatQuote className="h1 mb-3" />
          <p id="text" className="h1 mb-3 px-4">
            {text}
          </p>
          <div className="blockquote-footer pt-1">
            <address className="author d-inline">
              By{' '}
              <span id="author" rel="author">
                {author}
              </span>
            </address>
          </div>
        </blockquote>
        <div className="mt-3">
          <SocialBar />
        </div>

        <div className="position-fixed w-100 bottom-0 left-0">
          <button
            id="new-quote"
            className="btn btn-primary my-4 d-block mx-auto px-4 py-3"
            onClick={fetchQuote}
          >
            Generate new quote
          </button>
        </div>
      </div>
    </div>
  );
};
