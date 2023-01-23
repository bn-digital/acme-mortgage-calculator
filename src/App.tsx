import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { DatePicker } from 'antd';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <DatePicker />
    </div>
  )
}

export default App
