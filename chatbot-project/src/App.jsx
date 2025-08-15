import { useState, useRef, useEffect } from 'react';
import { ChatInput } from './components/ChatInput.jsx';
import ChatMessages from './components/ChatMessages.jsx';
import './App.css';

export function useAutoScroll(dependencies){
          const containerRef = useRef(null);
          useEffect(() =>{
          const containerElem = containerRef.current;
          if (containerElem){
            containerElem.scrollTop = containerElem.scrollHeight;
            
          }
        }, dependencies);

        
        return containerRef;

        }


      



 function App(){
        const [chatMessages, setChatMessages] = useState([])

        return (
          <div className="app-container">
            {chatMessages.length === 0 && <p className="default-message"> Welcome to the chatbot project Send a message using the textbox below.</p>}
            
            <ChatMessages
              chatMessages = {chatMessages}
            />
            <ChatInput
              chatMessages = {chatMessages}
              setChatMessages = {setChatMessages}
            
            />
          </div>
        );
      }

export default App
