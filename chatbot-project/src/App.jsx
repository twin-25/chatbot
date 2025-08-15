import { useState, useRef, useEffect } from 'react';
import { ChatInput } from './components/ChatInput.jsx';
import ChatMessages from './components/ChatMessages.jsx';
import './App.css';
import { Chatbot } from 'supersimpledev';
import dayjs from 'dayjs';

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
         const [chatMessages, setChatMessages] = useState([]); 

        useEffect(()=>{
          Chatbot.addResponses({"I love you" : "I love you too"});
        },[]);

        useEffect(()=>{
          localStorage.setItem('messages', JSON.stringify(chatMessages));

        },[chatMessages]);

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
