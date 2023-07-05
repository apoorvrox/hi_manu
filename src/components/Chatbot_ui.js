import React, { useState } from 'react';
import './Chatbot_ui.css'

const Chatbot_ui = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Add user's message to the chat
    if (inputValue.trim() !== '') {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, isUser: true },
      ]);
      setInputValue('');
    }

    // Call your chatbot API or logic here to generate a response
    // You can simulate a response by uncommenting the code below
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'This is a response from the chatbot!', isUser: false },
      ]);
    }, 500);
    
  };

  return (
    <div className="chatbot-ui">
      <div className="chatbot-ui__messages">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isUser ? 'user' : 'bot'}`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <form className="chatbot-ui__input-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot_ui;
