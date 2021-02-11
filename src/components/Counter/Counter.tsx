import React, { FunctionComponent, useState } from 'react';

import './Counter.css';

const Counter:FunctionComponent<{ initial?: number }> = ({ initial = 0 }) => {
  const [clicks, setClicks] = useState(initial);
  return <>
    <div className="counter">
      <p>Clicks: {clicks}</p>
      <button onClick={() => setClicks(clicks+1)}>+</button>
      <button onClick={() => setClicks(clicks-1)}>-</button>
    </div>
  </>
}

export default Counter;