import { useState } from 'react'
import './App.css'
import Pages from '../../pages';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Pages />
    </div>
  )
}

export default App
