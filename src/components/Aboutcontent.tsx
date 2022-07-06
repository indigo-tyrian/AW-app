import 'src/components/styles/global.css'
import { Style, buttonContainerStyle, buttonExpandStyle, lineStyle, textStyle, descriptionTextStyle } from './styles/eachOne.css'
import { MouseEvent, useState } from 'react'

interface Props {
  contentPath?: string;
}


const AboutContent = (props: Props) => {
  const [hidden, setHidden] = useState(false)

  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event) {
      setHidden(false)
    }
  }

  const onClick2 = (event: MouseEvent<HTMLDivElement>) => {
    if (event) {
      setHidden(true)
    }
  }

  return (
    <div className={Style}>
      <div className={lineStyle}>About</div>
      <div className={`${hidden ? descriptionTextStyle.expand : descriptionTextStyle.fold} `}>{props.contentPath}
      </div>
      <div className={`${buttonExpandStyle} ${textStyle}`}>
        <div className={buttonContainerStyle}>
          <span>
            {hidden ? (
              <div onClick={onClick}> read less</div>
            ) :
              (<div onClick={onClick2}> read more</div>

              )}
          </span>
        </div>
      </div>
    </div>

  )
}

export default AboutContent