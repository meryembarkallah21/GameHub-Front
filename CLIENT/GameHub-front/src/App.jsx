import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import "bootstrap/dist/js/bootstrap.min.js"
import AddStation from './components/station/addStation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddStation/>
    </>
  )
}

export default App
