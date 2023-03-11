import React from "react";

function HistoryTab({ history }) {
  return (
    <div className="history">
      <h1 className="history_header">History</h1>
      <div className="history_table_header">
        <label>Name</label>
        <label>Link</label>
        <label>Played At</label>
      </div>
      <div className="history_list">
        {history.map((entry, index) => (
          <div key={index}>
            <div className="history_list_item">
            <div>
              {entry.cardName}
            </div>
            <div>
              <a href={entry.mp3Link} className='card_item_link'>Video/Mp3 Link</a>
            </div>
            <div>
              {entry.playedAt.toLocaleString()}
            </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default HistoryTab;
