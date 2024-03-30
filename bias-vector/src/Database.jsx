import { useState } from 'react'
import './App.css'
import './Database.css'

function Database() {
  const [count, setCount] = useState(0)

  return (
    <body>
      <header>
        <img src="src\images\logo_white.png" class="logo" alt="logo">
        </img>
        <nav>
          <ul class="nav_links">
            <li><a href="index.html">Home</a></li>
            <li><a href="/../database.html">Database</a></li>
            <li><a href="/../about.html">About</a></li>
            <li><a href="/../team.html">Team</a></li>
            <li><a href="/../references.html">References</a></li>
          </ul>
        </nav>
        <a class="cta" href="/../feedback.html"><button>Feedback</button></a>
      </header>
      <div class="container">
  <div class="scrolling-carnival">
    <div class="website">
      <h2>Example Website 1</h2>
      <p class="bias-score">Bias Score: 7.8</p>
    </div>
    <div class="website">
      <h2>Example Website 2</h2>
      <p class="bias-score">Bias Score: 6.5</p>
    </div>
    <div class="website">
      <h2>Example Website 3</h2>
      <p class="bias-score">Bias Score: 5.2</p>
    </div>
  </div>
  </div>
    </body>
  )
}

export default Database