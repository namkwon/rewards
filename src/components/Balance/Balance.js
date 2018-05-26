import React from 'react';
import cardbase from '../../images/08a_amazon_cardbase.png';
import fill1 from '../../images/04a_dashboard_rewardsfill_12.png';
import fill2 from '../../images/04b_dashboard_rewards_emptyfill_14.png';
import fill3 from '../../images/04b_dashboard_rewards_emptyfill_16.png';
import './Balance.css';

export default function Balance({balance}) {
  const { amount, numOfCards } = balance;

    return (
      <div className="balance">
        <img src={cardbase} className="base" alt="balance"/>
        <div className="icon1">
            <img src={fill1} className="fill12" alt=""/>
            <img src={fill2} className="fill14" alt=""/>
            <img src={fill3} className="fill16" alt=""/>
        </div>
        <div className="budget">
            <div className="a3-cards">
                {`${numOfCards} cards`}
            </div>
            <div className="a00">
                .00
            </div>
            <div className="a280">
                {amount}
            </div>
            <div className="label1">
                $
            </div>
        </div>
        <div className="title">
            <div className="today21-feb">
                Today, 21 Feb
            </div>
            <div className="rewards-balance">
                Rewards Balance
            </div>
        </div>
      </div>
    );
}
