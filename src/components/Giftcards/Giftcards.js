import React from 'react';
import Giftcard from '../Giftcard/Giftcard';
import './Giftcards.css';

export default function Giftcards({giftcards, total_pages, page}) {
    const renderGiftcards = giftcards.map((giftcard) => {
      return(
        <Giftcard key={giftcard.id} giftcard={giftcard} />
      )
    });

    return (
      <div className="gift-cards">
        {renderGiftcards}
      </div>
    );
}
