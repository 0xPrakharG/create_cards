import React from 'react'

export default function MyCards({ handleSubmit, name, setName, mp3Link, setMp3Link, editingCardIndex, cards, onCardPlay, handleDelete, handleEdit }) {
  return (
    <div className='my_cards'>
          <div>
      <h1 className='cards_header'>My Cards</h1>
      <form onSubmit={handleSubmit} className="cards_form">
        <div className='cards_form_label'>
        <label className='card_label'>
          Name
          <input
            className='card_form_input'
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label className='card_label'>
          Video/MP3 Link
          <input
            className='card_form_input'
            type="text"
            value={mp3Link}
            onChange={(event) => setMp3Link(event.target.value)}
          />
        </label>
        </div>
        <button type="submit" className='card_create_btn'>{editingCardIndex === -1 ? 'Create Card' : 'Update Card'}</button>
      </form>
      </div>
      <ul className='cards_list'>
        {cards.map((card, index) => (
          <li key={index} className="card_item">
            <div>
              <div className='card_item_content'>
                <div className='card_item_info'>
                  <div className='card_item_name'>{card.name}</div>
                  <div><a href={card.mp3Link} className='card_item_link'>Video/Mp3 Link</a></div>
                </div>
                <div className='card_item_btns'>
                  <button className='card_btn' onClick={() => onCardPlay(card,card.mp3Link,index)}>Play</button>
                  <button className='card_btn' onClick={() => handleEdit(index)}>Edit</button>
                  <button className='card_btn' onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      </div>
  )
}
