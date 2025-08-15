  import { useState } from "react";
  
  export function LoginForm(){
      const [showPassword, setShowPassword] = useState(false);
      return(
        <>
          <div><input
            className = 'email-input'
            placeholder="Email" />
          </div>
          <div><input
            type = {showPassword? 'text': 'password'}
            className ="password-input" placeholder="Password" />
            <button
            onClick={() => setShowPassword(prev => !prev)}>
            {showPassword?"Hide":"show"}</button>
          </div>
          <button
          className = "login-button"
          >Login
          </button>
          <button
          className = "signup-button"
          >Sign up
          </button>
        </>
      )

      }