import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./images/logo.svg";
import instagram from "./images/social/instagram.png";
import facebook from "./images/social/facebook.png";
import twitter from "./images/social/twitter.png";
import map from "./images/map/map.png";
import './style/footer.css';

const Footer = ({modal}) => {
  return (
    <footer style={modal ? {filter: 'blur(8px)'} : {}}>
      <div className='footerWrapper'>
        <div className='footerLogo'>
            <img src={logo} alt='logo'/>
        </div>

        <div className='footerContainer'>
          <div className='quickLink'>
            <h3 className='footerTitle'>Quick Links:</h3>
            <ul className='footerList'>
              <li className='listItem'>
                  <Link className='menuLink' to='/'>
                    HOME
                  </Link>
              </li>
                <li className='listItem'>
                  <Link className='menuLink' to='/dining'>
                    DINING
                  </Link>
                </li>
              <li className='listItem'>
                  <Link className='menuLink' to='/rooms'>
                      ROOMS
                  </Link>
              </li>
                <li className='listItem'>
                  <Link className='menuLink' to='/events'>
                    EVENTS
                  </Link>
                </li>
                <li className='listItem'>
                  <Link className='menuLink' to='/contact'>
                  CONTACT US
                  </Link>
                </li>
              </ul>
          </div>

          <div className='about'>
            <h3 className='footerTitle'>About:</h3>
              <ul className='footerList'>
              <li className='listItem'>
                <Link className='menuLink' to='/company'>
                COMPANY
                </Link>
              </li>
              <li className='listItem'>
                <Link className='menuLink' to='/recruitment'>
                  RECRUITMENT
                </Link>
              </li>
              <li className='listItem'>
                <Link className='menuLink' to='/legal'>
                LEGAL
                </Link>
              </li>
              <li className='listItem'>
                <Link className='menuLink' to='/help'>
                HELP
                </Link>
              </li>
              <li className='listItem'>
                <Link className='menuLink' to='/faq'>
                FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className='social'>
            <h3 className='footerTitle'>Social:</h3>
            <ul className='footerList'>
              <li className='listItem'>
                <Link className='menuLink' to='/instagram'>
                <img className='instagram' src={instagram} alt='social media'/>
                  <p className='socMedText'>Instagram</p>
                </Link>
              </li>
              <li className='listItem'>
              <Link className='menuLink' to='/facebook'>
                  <img className='facebook' src={facebook} alt='social media'/>
                  <p className='socMedText'>Facebook</p>
                </Link>
            </li>
              <li className='listItem'>
                <Link className='menuLink' to='/twitter'>
                  <img className='twitter' src={twitter} alt='social media'/>
                  </Link>
              </li>
          </ul>
          </div>
        
        <div className='location'>
            <h3 className='footerTitle'>Location:</h3>
            <p className='locationText'>Edgewater Road, Puerto Galera, 5203 Oriental Mindoro, Philippines</p>
            <img src={map} alt='map location'/>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
