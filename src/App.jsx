import { useState, useEffect } from 'react'
import styled from 'styled-components'
import './App.css'
import Location from './components/Location'
import ResidentCard from './components/ResidentCard'
import useFetch from './hooks/useFetch'

function App() {
  const [location, setLocation] = useState()
  const getRandomLocation = () => {
    return Math.floor(Math.random() * (126 - 1) + 1)
  }
  let loc = useFetch(`https://rickandmortyapi.com/api/location/${getRandomLocation()}`)
  console.log(loc)
  return (
    <div className="App">
      {loc && <Location location={loc} />}
      <CardSection>
        {
          loc?.residents.map(url => (
            <ResidentCard key={url} url={url} />
          ))
        }
      </CardSection>
    </div>
  )
}

const CardSection = styled.section`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
`

export default App
