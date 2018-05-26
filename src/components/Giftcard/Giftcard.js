import React from 'react';
import './Giftcard.css';

export default function Giftcard({giftcard}) {
  const {vendor_name, reward_type, value, logo} = giftcard;

    return (
      <div className="gift-card">
          <div className="vendor">
              <img src={require(`../../images/${logo}`)} className="vendor-logo" alt="vendor"/>
              <div className="vendor-reward-group">
                <div className="vendor-name">
                  {vendor_name}
                </div>
                <div className="reward-type">
                  {reward_type.toUpperCase()}
                </div>
              </div>
              <div className="value">
                {`$${value.toFixed(2)}`}
              </div>
          </div>
      </div>
    );
}
