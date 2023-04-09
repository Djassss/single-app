import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faL, faXmark } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  
  const onClickPlus = () => {
    setCount(count + 1);
  };
  
  const onClickMinus = () => {
    setCount(count - 1);
  };

  return (
    <div className='main'>
      <FontAwesomeIcon className={`man ${open ? 'vs' : false}`} icon={faBars} onClick={() => setOpen(true)}/>
      
       
      <div className={`div ${open ? 'show' : ''}`}>
      <FontAwesomeIcon onClick={() => setOpen(false)} icon={faXmark}/>
        <h2>счетчик</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className='minus'>- Минус</button>
        <button onClick={onClickPlus} className='plus'>плус +</button>
      </div>
      


    </div>
  )
}

export default Main;