import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="uk-container-full-width">
      <footer className="uk-light footer uk-padding">
        <div className="uk-grid uk-child-width-expand@s" uk-grid>
          <div className="uk-width-1-3@m">
            <h3>Social Media</h3>
            <div className="uk-flex uk-flex-middle">
              <a className="uk-margin-right" href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a className="uk-margin-right" href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a className="uk-margin-right" href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </div>
          </div>
          <div className="uk-width-1-3@m">
            <h3>Contact Us</h3>
            <p>Email: info@eventsrentals.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 1234 Event Way, City, Country</p>
          </div>
          <div className="uk-width-1-3@m">
            <h3>Payment Method</h3>
            <p>Bank Transfer</p>
            <p>Sampath Bank Bambalapitya</p>
            <p>Account No: 0112221112</p>
            <p>Transfer and forward the receipt to +9477112211 or E-mail to test@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
