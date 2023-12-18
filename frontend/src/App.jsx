import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [msg, setMsg] = useState("pain");
  useEffect(() => {
    fetch("http://localhost:5000")
      .then((res) => res.text())
      .then((data) => setMsg(data)) // Set state inside the resolved promise
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div>
        <p id='message'>{msg}</p>
      </div>
    </>
  )
}

export default App
