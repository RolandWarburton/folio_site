import React from 'react';
import {Link} from 'react-router-dom'
import Header from './Header'

function Articles() {
  return (
    <div className="centerCol">
      <Header />
      <h1>Articles</h1>
      <Link to="/">home</Link>
    </div>
  )
}

export default Articles;
