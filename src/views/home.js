import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Principal Communications Executive</title>
        <meta
          property="og:title"
          content="Principal Communications Executive"
        />
      </Helmet>
    </div>
  )
}

export default Home
