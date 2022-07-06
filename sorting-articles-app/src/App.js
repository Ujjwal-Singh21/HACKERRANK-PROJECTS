import './App.css'
import { useState } from 'react'
import { Articles } from './Components/Articles'

function App ({ articles }) {

  let sortedArticles = articles

  const [state, setState] = useState('VOTE')

  const setSortState = state => {
    setState(state)
  }

  // function to sort articles
  //--------------------------
  const sortArticlesFn = () => {

    if (state === 'VOTE') {
      sortedArticles.sort((a, b) => (a.upvotes < b.upvotes ? 1 : -1))
    } else if (state === 'DATE') {
      sortedArticles.sort((a, b) => (a.date < b.date ? 1 : -1))
    }

    return <Articles articles={sortedArticles} />
  }

  return (
    <div className='App'>
      {sortArticlesFn()} <br />
      <button onClick={() => setSortState('VOTE')}> Most Upvotes </button>
      <button onClick={() => setSortState('DATE')}> Most Recents </button>
    </div>
  )
}

export default App
