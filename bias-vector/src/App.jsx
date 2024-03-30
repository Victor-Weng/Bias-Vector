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
            <li><a href="index.html">Home</a></li>
            <li><a href="/../database.html">Database</a></li>
            <li><a href="/../about.html">About</a></li>
            <li><a href="/../team.html">Team</a></li>
            <li><a href="/../references.html">References</a></li>
          </ul>
        </nav>
        <a class="cta" href="/../feedback.html"><button>Feedback</button></a>
      </header>
      <section>
        <div>
          <h1 className="title">Bias 
          Vector</h1>
          <div className="b">
          Find the bias in your source. Powered by Google Gemini.
          </div>
        </div>

        <div class="center-box">
        <div class="animated-border-box-glow"></div>
            <div class="animated-border-glow">
          </div>  
          <div class="highz">
                <input type="text" placeholder="Enter a URL"/>
              </div>    
        </div>
        <br/>
        <div>
          <button className="analyze">
            Analyze
          </button> 
        </div>
      </section>
    </body>
  )
}

export default App
