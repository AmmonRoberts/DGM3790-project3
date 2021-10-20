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
      // const URL = `../../netlify/functions/node-fetch/node-fetch`

      try {
        const response = await axios.get(URL)
        const countries = await response.data

        console.log(countries)

        setCountries(countries)
      } catch (error) {
        console.log(error)
      }
    }
    // then call the function
    fetchCountries()
  }, [])

  return (
    <CountryContext.Provider value={{ countries }}>
      {props.children}
    </CountryContext.Provider>
  )
}

export const useCountryContext = () => React.useContext(CountryContext)