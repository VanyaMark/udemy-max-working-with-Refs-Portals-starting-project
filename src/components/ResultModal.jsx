import React from 'react'

const ResultModal = ({result, targetTime}) => {
  return (
    <dialog className='result-modal' open>
        <h2>You {result}</h2>
        <p>
           The target time was <strong>{targetTime} seconds.</strong>
        </p>
        <p>
            You stopeed the timer with <strong>X seconds</strong> left.
        </p>
        <form method='dialog'>
            <button>Close</button>
        </form>
    </dialog>
  )
}

export default ResultModal