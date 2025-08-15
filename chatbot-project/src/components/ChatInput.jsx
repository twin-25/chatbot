import { useState } from "react";
import { Chatbot } from "supersimpledev";
import Loading from '../assets/loading-spinner.gif'
import './ChatInput.css'


export function ChatInput({chatMessages, setChatMessages}) {
      const [inputText, setInputText] = useState('')
      function saveInputText(event) {
          setInputText(event.target.value);
      }
      function handleKey(event){
        if(event.key === 'Enter'){
          if(event.target.value === ''){
            return 
          }
          sendMessage();
        }else if( event.key === "Escape"){
          setInputText('');
        }
    }



        async function  sendMessage(){
          const  newChatMessages = [
          ...chatMessages,
          {
            message: inputText,
            sender : 'user',
            id: crypto.randomUUID()
          }
        ]
          setChatMessages(newChatMessages);
          setChatMessages([
            ...chatMessages,
          {
            message: <img src= {Loading} className="loading-image"/>,
            sender : 'robot',
            id: crypto.randomUUID()
          }
          ])
        
        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages([
          ...newChatMessages,
          {
            message: response,
            sender : 'robot',
            id: crypto.randomUUID()
          }
        ]);


        setInputText('');
        }
        return (
          <div className="chat-input-container">
            <input 
              placeholder="Send a message to chatbot" 
              size = "30"
              className = "chat-input"
              onChange = {
                saveInputText
              }
              onKeyDown= {handleKey}
              value = {inputText}
            />
            <button
            onClick={sendMessage}
            className="send-button">
              Send
            </button>
          </div>
        );
      }