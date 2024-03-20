import React from 'react'
import './style.css';

const MainBackground = (props) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
      );
}

export default MainBackground;