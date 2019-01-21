import React from 'react'
const LinkedIn = 'https://www.linkedin.com/in/jessethach/'

const HomePage = () => {
  return (
    <div className="container">
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Welcome to Tag The Kitty game!</h1>
            <a className="subtitle" href={LinkedIn}>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
