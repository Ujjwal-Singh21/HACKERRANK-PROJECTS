import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const ARTICLES = [
  {
    title: 'A message to our customers',
    upvotes: 12,
    date: '2020-01-24'
  },
  {
    title: 'Alphabets earnings',
    upvotes: 22,
    date: '2018-11-23'
  },
  {
    title: 'Artificial Mountains',
    upvotes: 2,
    date: '2019-11-22'
  },
  {
    title: 'Scaling to 100k Users',
    upvotes: 72,
    date: '2016-01-21'
  },
  {
    title: 'The Emu War',
    upvotes: 24,
    date: '2013-10-21'
  },
  {
    title: 'What a SAP',
    upvotes: 1,
    date: '2011-11-21'
  },
  {
    title: 'Simple Text Editor has 15k monthly users',
    upvotes: 7,
    date: '2010-12-31'
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App articles={ARTICLES} />
  </React.StrictMode>
);


