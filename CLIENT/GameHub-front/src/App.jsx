import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import "bootstrap/dist/js/bootstrap.min.js"
import AddStation from './components/station/addStation'
import ExistingStations from './components/station/ExistingStations';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddStation/>
      <ExistingStations/>
    </>
  )
}

export default App
