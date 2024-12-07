import { useState } from 'react'

function Switcher() {

  const [sw, setSw] = useState(false);
  return (
    <div>
      {sw ? (
        <span>DARK</span>
      ):(
        <span>LIGHT</span>
      )}
      <br/>
      <input type="text" key={sw ? "dark": "light"} />
      <button onClick={()=> setSw(s => !s)}>Switch</button>
    </div>
  )
}

export default Switcher
