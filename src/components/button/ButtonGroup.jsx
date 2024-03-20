import React from 'react'
import './style.css'
import ButtonBack from './ButtonBack';
import ButtonNext from './ButtonNext';
// import ButtonGetStart from './ButtonGetStart';
// import ButtonCloseSmall from './ButtonCloseSmall';
// import ButtonBackSmall from './ButtonBackSmall copy';

const ButtonGroup = () => {
    const handleBackClick = () => {
        // Your back button click logic here
        console.log('Back button clicked');
    };

    return (
        <div className='button-container'>
            <ButtonBack message="Back" onClick={handleBackClick}/>
            <ButtonNext message="Next" onClick={handleBackClick}/>
        </div>
    )
}


export default ButtonGroup;