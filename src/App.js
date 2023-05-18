import axios from 'axios'
import { useEffect, useState } from 'react'
import Main from './Components/Main/Main'
function App() {
  const [ ships, setShips ] = useState([])

  const URL = "https://swapi.dev/api/starships/?page=1"



  useEffect(() => {
    axios.get(URL)
      .then(data => {
        setShips(data.data.results)
        // console.log(ships, 'dentro del useEffect')
      })
  }, [])

  console.log(ships, 'Fuera del useEffect')

  const shipsEl = ships.map(({ name, model }) => <Main 
    name={ name }
    model={ model }
  />)
  
  return (
    <div className="App">
      {shipsEl}
    </div>
  );
}

export default App;
