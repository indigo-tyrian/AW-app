import '../components/styles/global.css'
import { MouseEvent, useState } from 'react'
import { searchButtonStyle, searchContainerStyle, searchButtonInnerStyle, dataResultStyle, dataResultItemStyle } from "./styles/Input.css"
import { MagnifyingGlassIcon } from "./svg/MagnifyingGlassSvg"
import Data from "../json/LivingThings.json"

interface Props {
  class1: string
  class2: string
}

interface FilterProps {
  name: string;
  title: string;
  img: string[];
  about: {
    name: string;
    title: string;
  }
}[]

interface Length {
  length: number
}

const Input = ({ class2, class1 }: Props) => {

  const [filteredData, setFilteredData] = useState<any>({} as FilterProps);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event: { target: { value: string; }; }) => {
    const searchWord = event.target.value;
    const newFilter = filteredData.length > 0 ? Data.each.filter((value) => { value.name.toLowerCase().startsWith(searchWord.toLowerCase()) }) : undefined

    setFilteredData(newFilter)

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
    <div className={class2}>
      <div className={searchContainerStyle}>
        <input className={class1} type="text" placeholder="Search..." onChange={handleFilter} value={wordEntered} />
        <div className={searchButtonStyle}>
          <div className={searchButtonInnerStyle} onClick={clearInput}>
            <MagnifyingGlassIcon fillColor='gray' />
          </div>
        </div>
      </div>

      {filteredData.length != 0 && (

        <div className={dataResultStyle} >
          <div >
            {filteredData.map((value: { name: string }, key: number) => {
              return (
                <div key={key} className={dataResultItemStyle}>
                  {/* <a href={value.link} target='_blank'> */}
                  <p>{value.name}</p>
                  {/* </a> */}
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