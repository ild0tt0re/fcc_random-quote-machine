import React from 'react';
import './SocialBar.scss';
import { ReactComponent as TwitterIcon } from '../assets/twitter-icon.svg';
import { ReactComponent as InstagramIcon } from '../assets/instagram-icon.svg';
import { ReactComponent as TumblrIcon } from '../assets/tumblr-icon.svg';

export const SocialBar = () => {
  return (
    <div className="social-container d-flex justify-content-center">
      <a
        id="tweet-quote"
        className="p-1"
        title="Tweet this quote!"
        rel="noreferrer"
        target="_blank"
        href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(
          ` - by `
        )}`}
      >
        <TwitterIcon />
      </a>
      <a
        id="instagram-quote"
        className="p-1"
        title="Post this quote!"
        rel="noreferrer"
        target="_blank"
        href={`https://www.instagram.com/`}
      >
        <InstagramIcon />
      </a>
      <a
        id="tumblr-quote"
        className="p-1"
        title="Tumblr this quote!"
        rel="noreferrer"
        target="_blank"
        href={`https://www.tumblr.com/`}
      >
        <TumblrIcon />
      </a>
    </div>
  );
};
