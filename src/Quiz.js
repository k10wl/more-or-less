import React from "react";

const Quiz = props => {
  const vs = <div className='Quiz--vs'><p>VS</p></div>
  const moreOrLess = (props.data.resultLCal < props.data.resultRCal) ? '<' : '>'
  const right = <div className='Quiz--vs Quiz--vs__true'><p>{moreOrLess}</p></div>
  const wrong = <div className='Quiz--vs Quiz--vs__false'><p>{moreOrLess}</p></div>
  const toggle = props.data.toggleShowCalories
  return (
    <div className='Quiz'>
      <div className='Quiz--left'>
        <div className='Quiz--left__known-info'>
          <div className='Quiz--text-box'>
              <div>
                <p>100g of <span>{toggle ? props.data.resultLName : props.data.lName}</span> contains</p>
                <p><span>{toggle ? props.data.resultLCal : props.data.lCal}</span> calories</p>
              </div>
          </div>
          <img src={toggle ? props.data.resultLUrl : props.data.lUrl}
               alt={toggle ? props.data.resultLName : props.data.lName}/>
        </div>
      </div>

      <div className='Quiz--right'>
        <div className='Quiz--right__known-info'>
          <div className='Quiz--text-box'>

              {props.data.toggleShowCalories === false ?
                <div>
                  <p>100g of <span>{props.data.rName}</span> contains</p>
                  <button
                    className='Quiz--button button'
                    onClick={props.checkIfMore}>
                    More
                  </button>
                  <br/>
                  <button
                    className='Quiz--button button'
                    onClick={props.checkIfLess}>
                    Less
                  </button>
                </div>
                :
                <div>
                  <p>100g of <span>{props.data.resultRName}</span> contains</p>
                  <p><span>{props.data.resultRCal}</span> calories</p>
                </div>
              }

          </div>
          <img src={toggle ? props.data.resultRUrl : props.data.rUrl}
               alt={toggle ? props.data.resultRName : props.data.rName}/>
        </div>
      </div>

      {props.data.toggleShowCalories === false ? vs : (props.data.checkAnswer ? right : wrong)}

      <div className='Quiz--score'>
        <p>
          Score {props.data.scoreCount}
        </p>
      </div>
    </div>
  )
}

export default Quiz