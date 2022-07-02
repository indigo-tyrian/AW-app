import '../components/styles/global.css'
import '../components/styles/countries.css'
import { countryNameStillStyle, countryNameStyle, searchIconStyle, worldMapStyle, worldMapViewStyle } from "./styles/countries.css"
import WorldMap from "./svg/WorldMap"
import { bigTextStyle, phoneScrollStyle } from '../components/styles/global.css'
import { MouseEvent, useState } from 'react'
import { MagnifyingGlassIcon } from './svg/MagnifyingGlassSvg'

const Countries = () => {
  const [countryName, setCountryName] = useState("Please select the country")

  return (
    <>
      <div className={`${bigTextStyle}`}>
        <div>Search by Area</div>
      </div>
      <div className={countryNameStillStyle}>
        <div className={searchIconStyle}>
          <MagnifyingGlassIcon />
        </div>
        <div className={countryNameStyle}>{countryName}</div>
      </div>
      <div className={`${worldMapViewStyle} ${phoneScrollStyle}`}>
        <div>
        </div>
        <div className={worldMapStyle}>
          <WorldMap
            setCountryName={setCountryName}
          /></div>
      </div>
    </>

  )
}

export default Countries