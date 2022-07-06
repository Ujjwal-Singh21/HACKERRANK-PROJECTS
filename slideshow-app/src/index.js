import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

const SLIDES = [
  {
    slideNo: 1,
    title: "Today's workout plan",
    text: 'We are gonna do 3 fundamental exercises.'
  },
  {
    slideNo: 2,
    title: 'First, 10 push-ups',
    text: "Do 10 reps. Remember about full range of motion. Don't rush."
  },
  {
    slideNo: 3,
    title: 'Next, 20 squats',
    text: 'Squats are important. Remember to keep your back straight'
  },
  {
    slideNo: 4,
    title: 'Finally, 15 sit-ups',
    text: 'Slightly bend your knees. Remember about full range of motion'
  },
  {
    slideNo: 5,
    title: 'Great Job!',
    text: 'You made it, have a nice day and see you next time!'
  }
]

ReactDOM.render(<App slides={SLIDES} />, document.getElementById('root'))

