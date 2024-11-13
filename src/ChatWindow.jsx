import React, { useState } from 'react';
import './ChatWindow.css';

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [friends, setFriends] = useState([]);
  const [friendInput, setFriendInput] = useState('');
  const [activeFriend, setActiveFriend] = useState(null);

  const handleSendMessage = () => {
    if (input.trim() && activeFriend) {
      const timestamp = new Date().toLocaleTimeString();
      setMessages([...messages, { content: input, sender: 'You', time: timestamp }]);
      setInput('');
    }
  };

  const handleAddFriend = () => {
    if (friendInput.trim() && !friends.includes(friendInput)) {
      setFriends([...friends, friendInput]);
      setActiveFriend(friendInput);
      setMessages([]);
      setFriendInput('');
    }
  };

  return (
    <div className={`chat-container ${friends.length === 0 ? 'no-friends' : 'with-friends'}`}>
      {friends.length === 0 ? (
        <div className="no-friends centered">
          <h3>No Friends Yet</h3>
          <input
            type="text"
            value={friendInput}
            onChange={(e) => setFriendInput(e.target.value)}
            placeholder="Enter friend's name"
            className="centered-input"
          />
          <button onClick={handleAddFriend} className="add-friend-button">
            <span role="img" aria-label="add-friend">➕</span> Add Friend
          </button>
        </div>
      ) : (
        <div className="chat-layout">
          <div className="friends-list">
            <h3>Add Friend</h3>
            <input
              type="text"
              value={friendInput}
              onChange={(e) => setFriendInput(e.target.value)}
              placeholder="Friend's name"
              className="friend-input"
            />
            <button onClick={handleAddFriend} className="add-friend-button">Add Friend</button>
            <h4>Friends</h4>
            <ul>
              {friends.map((friend, index) => (
                <li
                  key={index}
                  className={friend === activeFriend ? 'active-friend' : ''}
                  onClick={() => {
                    setActiveFriend(friend);
                    setMessages([]);
                  }}
                >
                  {friend}
                </li>
              ))}
            </ul>
          </div>
          {activeFriend && (
            <div className="chat-window">
              <h3 className="name">{activeFriend}</h3>
              <div className="messages">
                {messages.map((msg, index) => (
                  <div key={index} className="message">
                    <b>{msg.sender}:</b> {msg.content} <span className="message-time">({msg.time})</span>
                  </div>
                ))}
              </div>
              <div className="message-input">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                />
                <button onClick={handleSendMessage}>Send</button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
