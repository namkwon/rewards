import React from 'react';
import sidelist from '../../images/03a_dashboard_cryptosidelist.png';
import cardthumb from '../../images/07a_the_keg_cardthumb.png';
import './Header.css';

export default function Header(props) {
    return (
      <div className="top-bar">
          <img src={sidelist} className="sidelist" alt="menu"/>
          <img src={cardthumb} className="thumb" alt=""/>
      </div>
    );
}
