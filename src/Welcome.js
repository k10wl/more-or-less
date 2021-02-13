import React from "react";

 const Welcome = props => {
   return (
     <div className='welcome'>
       <div className='welcome--info'>
         <h1>Welcome to</h1>
         <h1 className='welcome--info__name'>More / Less</h1>
         <h1>Here you have to guess if food <br/> contains more or less calories</h1>
         {props.data.showStartButton && <button onClick={props.startButton} className='welcome--info__button button'>
           Got it. Lets start!
         </button>}
       </div>
     </div>
   )
 }

export default Welcome