import 'src/components/styles/global.css'
import { svgStyle } from 'src/components/styles/bottomNav.css'

interface Props {
  fillColor?: string;
}

export const PostIcon = (props: Props) => {
  return (

    <svg className={svgStyle} fill={props.fillColor} width="100%" height="100%" viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg"

      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: "2"
      }}
    >
      <g id="Layer1">
      </g>
      <g transform="matrix(1,0,0,1,-0.744958,0.701725)">
        <g id="Layer2">
          <g>
            <path
              d="M59.954,68.132L81.513,68.132L124.49,25.155L102.931,3.597L59.954,46.573L59.954,68.132ZM70.563,50.352L70.534,50.352L70.534,57.353L77.535,57.353L77.535,57.324L77.563,57.353L110.027,24.889L102.998,17.86L70.534,50.324L70.563,50.352Z"
            />
            <path
              d="M67.61,27.102L67.61,16.394L5,16.394L5,123L111.606,123L111.606,60.39L100.898,60.39L100.898,112.291L15.709,112.291L15.709,27.102L67.61,27.102Z"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}