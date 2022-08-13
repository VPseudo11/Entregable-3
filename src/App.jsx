import { useState, useEffect } from 'react'
import styled from 'styled-components'
import HeaderImg from './components/HeaderImg'
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
    <AppContainer>
      <div>
        <HeaderImg />
      </div>
      <LocationSection>
        {loc && <Location location={loc} />}
      </LocationSection>
      <CardSection>
        {
          loc?.residents.map(url => (
            <ResidentCard key={url} url={url} />
          ))
        }
      </CardSection>
    </AppContainer>
  )
}
const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`

const LocationSection = styled.section`
  width: 100%;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0;
`
const CardSection = styled.section`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
`


export default App
