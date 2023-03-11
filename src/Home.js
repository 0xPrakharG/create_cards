import React, { useState } from 'react';
import Bucket from './Bucket';
import HistoryTab from './HistoryTab';
import Modal from './Modal';
import MyCards from './MyCards';

function Home() {
  const [cards, setCards] = useState([]);
  const [name, setName] = useState('');
  const [history, setHistory] = useState([]);
  const [mp3Link, setMp3Link] = useState('');
  const [editingCardIndex, setEditingCardIndex] = useState(-1);
  const [bucketName, setBucketName] = useState('');
  const [buckets, setBuckets] = useState([]);
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);

  const handleCloseModal = () => {
    setSelectedCardIndex(-1);
  };
  const onCardPlay = (card,mp3Link,cardIndex) => {
    const now = new Date();
    const playedEntry = {
      cardName: card.name,
      mp3Link: mp3Link,
      playedAt: now,
    };
    setHistory([...history, playedEntry]);
    setSelectedCardIndex(cardIndex);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingCardIndex === -1) {
      // create new card
      const newCard = { name, mp3Link };
      setCards([...cards, newCard]);
    } else {
      // edit existing card
      const updatedCards = [...cards];
      updatedCards[editingCardIndex] = { name, mp3Link };
      setCards(updatedCards);
      setEditingCardIndex(-1);
    }
    setName('');
    setMp3Link('');
  };

  const handleDelete = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  const handleEdit = (index) => {
    const cardToEdit = cards[index];
    setName(cardToEdit.name);
    setMp3Link(cardToEdit.mp3Link);
    setEditingCardIndex(index);
  };

  const handleBucketCreate = () => {
    const newBucket = { name: bucketName, cards: [] };
    setBuckets([...buckets, newBucket]);
    setBucketName('');
  };

  const handleBucketAddCard = (bucketIndex) => {
    const updatedBuckets = [...buckets];
    const updatedBucket = updatedBuckets[bucketIndex];
    updatedBucket.cards.push(cards[editingCardIndex]);
    updatedBuckets[bucketIndex] = updatedBucket;
    setBuckets(updatedBuckets);
    setEditingCardIndex(-1);
  };

  const handleBucketRemoveCard = (bucketIndex, cardIndex) => {
    const updatedBuckets = [...buckets];
    const updatedBucket = updatedBuckets[bucketIndex];
    updatedBucket.cards.splice(cardIndex, 1);
    updatedBuckets[bucketIndex] = updatedBucket;
    setBuckets(updatedBuckets);
  };
  
  return (
    <div className='home'>
      <div className='bucket_cards'>
        <MyCards handleSubmit={handleSubmit} name={name} setName={setName} mp3Link={mp3Link} setMp3Link={setMp3Link} editingCardIndex={editingCardIndex} cards={cards} onCardPlay={onCardPlay} handleDelete={handleDelete} handleEdit={handleEdit} />
      {selectedCardIndex !== -1 && (
        <Modal handleCloseModal={handleCloseModal} cards={cards} selectedCardIndex={selectedCardIndex} />
      )}
      <div>
        <HistoryTab history={history}/>
      </div>
      </div>
      <Bucket bucketName={bucketName} setBucketName={setBucketName} handleBucketCreate={handleBucketCreate} buckets={buckets} editingCardIndex={editingCardIndex} setEditingCardIndex={setEditingCardIndex} cards={cards} handleBucketAddCard={handleBucketAddCard} handleBucketRemoveCard={handleBucketRemoveCard} />
    </div>
  );
}

export default Home;
