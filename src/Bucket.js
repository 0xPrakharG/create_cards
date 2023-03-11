import React from 'react'

export default function Bucket({ bucketName, setBucketName, handleBucketCreate, buckets, editingCardIndex, setEditingCardIndex, cards, handleBucketAddCard, onCardPlay, handleBucketRemoveCard }) {
  return (
    <div className='buckets'>
      <div>
      <h1 className='buckets_header'>My Buckets</h1>
      <div className='bucket_form'>
      <div className="bucket_form_label">
      <label className='bucket_label'>
        Bucket Name
        <input
          type="text"
          value={bucketName}
          onChange={(event) => setBucketName(event.target.value)}
          className="bucket_label_input"
        />
      </label>
      </div>
      <button className='card_create_btn' onClick={handleBucketCreate}>Create Bucket</button>
      </div>
      </div>
      <div className='bucket_list'>
        {buckets.map((bucket, index) => (
          <div key={index} className='bucket_list_item'>
            <div className='bucket_list_item_top'>
            <h2 className='bucket_list_item_header'>{bucket.name}</h2>
            <div className='bucket_list_item_selector'>
            <select value={editingCardIndex} onChange={(event) => setEditingCardIndex(event.target.value)}>
              <option value="-1">Select a card to add to bucket...</option>
              {cards.map((card, cardIndex) => (
                <option key={cardIndex} value={cardIndex}>
                  {card.name}
                </option>
              ))}
            </select>
            <button className='add_to_bucket_btn' onClick={() => handleBucketAddCard(index)}>Add Card to Bucket</button>
            </div>
            </div>
            <div className='bucket_list_item_card_list'>
              {bucket.cards.map((card
              , cardIndex) => (
                <div key={cardIndex} className='bucket_list_item_card'>
                  <div className='bucket_card_info'>
                  <div className='card_item_name'>{card.name}</div>
                  <div><a href={card.mp3Link} className='card_item_link'>Video/Mp3 Link</a></div>
                  </div>
                  <div className='bucket_card_btns'>
                  <button className='card_btn' onClick={() => onCardPlay(card,card.mp3Link,cardIndex)}>Play</button>
                  <button className='card_btn' onClick={() => handleBucketRemoveCard(index, cardIndex)}>
                    Remove from Bucket
                  </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>
  )
}
