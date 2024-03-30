import { useState } from 'react'
import './App.css'
import './Border.css'

function App() {
  const [count, setCount] = useState(0)
  const [link, setLink] = useState("www.google.com")

  return (
    <body>
      <header>
        <img src="src\images\logo_white.png" class="logo" alt="logo">
        </img>
        <nav>
          <ul class="nav_links">
            <li><a href="#">About</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Database</a></li>
            <li><a href="#">References</a></li>
          </ul>
        </nav>
        <a class="cta" href="#"><button>Feedback</button></a>
      </header>
      <section>
        <div>
          <h1 className="title">Bias 
          Vector</h1>
          <div className="b">
          Find the bias in your source.
        </div>
        </div>
        <div>
        
        <button className="animated-border-box">Get Started</button>
        </div>
      </section>
    </body>
  )
}

export default App
