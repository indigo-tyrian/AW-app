import 'src/components/styles/global.css'
import { svgStyle } from 'src/components/styles/bottomNav.css'
interface Props {
  fillColor?: string;
}

export const HomeIcon = (props: Props) => {
  return (

    <svg className={svgStyle} fill={props.fillColor} width="100%" height="100%" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg" >
      <g>
        <g transform="matrix(-1.90323,-2.33078e-16,2.33078e-16,-1.90323,110.505,97.589)">
          <path d="M6.038,24.155L31.791,49.907L57.543,24.155L6.038,24.155Z"
            style={{ strokeWidth: "0.53px" }} />
        </g>
        <g transform="matrix(1.90323,0,0,1.90323,-47.4117,-70.2935)">
          <path
            d="M44.707,88.108L44.707,75.157L57.658,75.157L57.658,88.108L70.574,88.108L70.574,64.054L31.791,64.054L31.791,88.108L44.707,88.108Z"
            style={{ strokeWidth: "0.53px" }} />
        </g>
      </g>
    </svg>
  )
}