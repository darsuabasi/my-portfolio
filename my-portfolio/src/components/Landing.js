import React from 'react';
import { Portal } from '@material-ui/core';
import '../css/Landing.css'

const Landing = () => {

    return (
        <div className="landingMain"> 
            <button type="button">
                {/* {show ? 'Enter if you dare' : 'Mount children'} */}
            </button>
                {/* <div className={classes.alert}>
                    It looks like I will render here.
                        {show ? (
                    <Portal container={container.current}>
                        <span>But I actually render here!</span>
                    </Portal>
                        ) : null}
                </div>
                <div className={classes.alert} ref={container} /> */}
        </div>
   )
}

export default Landing