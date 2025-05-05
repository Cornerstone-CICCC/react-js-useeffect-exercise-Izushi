import toast, { Toaster } from 'react-hot-toast'
import './App.css'
import { useEffect, useState } from "react"

const App = () => {
  const [message, setMessage] = useState<string>('')
  const [likes, setLikes] = useState<number>(0)
  const [color, setColor] = useState<string>('red')

  const handleChangeMessage = () => {
    setMessage('Hello from React!')
  }

  const handleLike = () => {
    setLikes(likes + 1)
  }

  const handleChangeColor = () => {
    setColor(color === 'red' ? 'blue' : 'red')
  }

  useEffect(() => {
    console.log('Message changed:', message)
  }, [message])

  useEffect(() => {
    toast.success(`Likes update to ${likes}!`)
  }, [likes])

  useEffect(() => {
    console.log('Color changed:', color)
  }, [color])

  return (
    <div>
      <Toaster />
      <h2>Message Logger</h2>
      <button onClick={() => handleChangeMessage()}>Send Message</button>

      <h2>Like Counter</h2>
      <button onClick={handleLike}>Like</button>

      <h2>Color Box</h2>
      <button onClick={handleChangeColor}>Change Color</button>
      <div style={{ width: 100, height: 100, background: color }}>Color Box</div>
    </div>
  )
}

export default App