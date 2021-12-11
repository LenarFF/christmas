import React from 'react';
import './Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__wrap">
        <a
          target={'_blank'}
          className="footer__github"
          href="https://github.com/LenarFF?tab=repositories"
        >
          GitHub
        </a>
        <span className="footer__year">2021</span>
        <a target={'_blank'} className="footer__rsschool" href="https://rs.school/js/">
          rs
        </a>
      </div>
    </footer>
  );
}

export  {Footer}
