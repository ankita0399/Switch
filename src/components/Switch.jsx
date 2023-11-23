import React, {useState} from 'react';
import "./switch.css"

const Switch = () => {
  const [toggle, setIsToggled] = useState(true);

  const handleChange = () => {
    setIsToggled(!toggle)
  }

  const switchColor = {
    backgroundColor: toggle ? "yellow" : "black",
  };

  return (
    <div className='switch' style={switchColor}>
      <button type='button' onClick={handleChange}>
        {toggle ? "ON" : "OFF"}
      </button>
    </div>
  )
}

export default Switch
