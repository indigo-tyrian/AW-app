import '../components/styles/global.css'
import { MouseEvent, useState } from 'react'

import { searchButtonStyle, searchContainerStyle, searchButtonInnerStyle, dataResultStyle, dataResultItemStyle } from "./styles/Input.css"
import { MagnifyingGlassIcon } from "./svg/MagnifyingGlassSvg"
import data from "../json/LivingThings.json"




interface Props {
  class: string
  class2: string
}
const Input = (props: Props) => {

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event: { target: { value: string; }; }) => {
    const searchWord = event.target.value
    setWordEntered(searchWord);
    const newFilter = data.each.filter((value) => {
      if (searchWord == "") {
        return null
      }
      else { return value.name.toLowerCase().startsWith(searchWord.toLowerCase()) }
    })
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }

  }

  const clearInput = (event: MouseEvent<HTMLDivElement>) => {
    if (event) {
      console.log("gggg")
      setFilteredData([]);
      setWordEntered("");
    }
  };


  console.log(filteredData.length)
  return (
    <div className={props.class2}>
      <div className={searchContainerStyle}>
        <input className={props.class} type="text" placeholder="Search..." onChange={handleFilter} value={wordEntered} />
        <div className={searchButtonStyle}>
          <div className={searchButtonInnerStyle} onClick={clearInput}>
            <MagnifyingGlassIcon fillColor='gray' />
          </div>
        </div>
      </div>

      {filteredData.length != 0 && (

        <div className={dataResultStyle} >
          <div >
            {filteredData.map((value, key) => {
              return (
                <div key={key} className={dataResultItemStyle}>
                  <a href={value.link} target='_blank'>
                    <p>{value.name}</p>
                  </a>
                </div>
              )
            })}
          </div>
        </div >
      )}
    </div>

  )
}

export default Input