import React from 'react'

const FinalScore = (props) => {
  return (
    <div className='Score'>
      <div>
        <h1>
        Your final score is {props.data.scoreCount}
        </h1>
        <br/>
        {props.data.showStartButton && <button className='button' onClick={props.startButton}>Start again</button>}
      </div>
    </div>
  )
}

export default FinalScore
