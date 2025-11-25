import { useState } from 'react'
import Calculator from './components/Calculator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <Calculator />
    </div>
  );
}

export default App
