import React from 'react';
import Typing from 'react-typing-animation';
import '../css2/Error.css'

const Error = () => {

  return (
    <div className="errorHandlingMain"> 
        <div className="subOneError">
            <div className="subDivForError"> 

                <h1 className="message"> 
                  <Typing className="typingBody">
                    <h1 className="errorStatement">  Broken Link!</h1>
                    <h2 className="errorStatement"> Please try again!</h2>
                    <h3 className="errorStatement"> Or reach me at uduakabasiabasiurua@pursuit.org!</h3>
                    <h4 className="errorStatement"> Thank you!</h4>
                  </Typing>
                </h1>
            </div>
        </div>
    </div>  
  )
}


export default Error;