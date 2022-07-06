import 'src/components/styles/global.css'
import { svgStyle } from 'src/components/styles/bottomNav.css'

interface Props {
  fillColor?: string;
}

export const SavedIcon = (props: Props) => {
  return (
    <svg className={svgStyle} fill={props.fillColor} width="100%" height="100%" viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg"

      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: "2"
      }}
    >
      <g transform="matrix(0.936182,0,0,0.969885,4.16532,1.92738)">
        <g id="Layer2">
          <path d="M19.114,128L63.914,91.225L108.714,128L108.714,0L19.114,0L19.114,128Z"
          />
        </g>
      </g>
    </svg>
  )
}