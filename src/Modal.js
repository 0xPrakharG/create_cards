import React from 'react'

export default function Modal({ handleCloseModal, cards, selectedCardIndex }) {
  return (
    <div className="modal">
          <div className="modal-content">
            <div className="close" onClick={handleCloseModal}>
              <div className='close_btn'>&times;</div>
            </div>
            <iframe
              src={cards[selectedCardIndex].mp3Link}
              title="video"
              width="920"
              height="515"
              allow='autoplay; encrypted-media'
            ></iframe>
          </div>
        </div>
  )
}
