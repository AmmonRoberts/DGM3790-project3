import * as React from 'react'
import axios from 'axios'

const CountryContext = React.createContext({
  countries: [],
})

export const CountryContextProvider = (props) => {
  const [countries, setCountries] = React.useState([])

  React.useEffect(() => {
    const fetchCountries = async () => {
      const URL = `/.netlify/functions/countries`

      try {
        const response = await axios.get(URL)
        const countries = await response.data

        setCountries(countries)
      } catch (error) {
        console.log(error)
      }
    }

    fetchCountries()
  }, [])

  return (
    <CountryContext.Provider value={countries}>
      {props.children}
    </CountryContext.Provider>
  )
}

export const useCountryContext = () => React.useContext(CountryContext)