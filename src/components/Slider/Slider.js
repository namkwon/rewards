import React from 'react';
import dot from '../../images/04a_dashboard_rewards2.png';
import './Slider.css';

export default function Slider(props) {
    return (
      <div className="slider">
          <img src={dot} className="a3" alt="" />
          <img src={dot} className="a2" alt="" />
      </div>
    );
}
