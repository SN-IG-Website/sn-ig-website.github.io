import React from 'react';
import "./Flipcard.css";


function Flipcard() {
  return (
    <div class="card-container">
  <div class="card">
    <div class="side"><img alt=""   class="flipimage" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"/></div>
    <div class="side back">Jimmy Eat World</div>
  </div>
</div>
  )
}

export default Flipcard