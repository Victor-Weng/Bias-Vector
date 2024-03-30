import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
      <header>
        <img src="assets\logo_white.png" class="logo" alt="logo"/>
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
        </div>

        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <button onClick={() => setCount((count) => count - 1)}>
            Decrement
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </section>
    </body>
  )
}

export default App
