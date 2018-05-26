import React from 'react';
import blue_circle from '../../images/04b_dashboard_rewards_emptybtn.png';
import plus from '../../images/03b_dashboard_crypto_emptyicon.png';
import './ButtonAdd.css';

export default function ButtonAdd({title}) {
    return (
      <div className="add">
          <div>
              <img src={blue_circle} alt="Add"/>
              <img src={plus} className="icon" alt="Add"/>
          </div>
          <div className="pay">
              {title.toUpperCase()}
          </div>
      </div>
    );
}
