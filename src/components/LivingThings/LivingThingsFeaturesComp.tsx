import { featuresItemStyle, lineStyle, textStyle, containerStyle } from '../styles/eachOne.css';

interface Props {
  title: string;
  text: string | number;
}

export function LivingThingsFeaturesComp(props: Props) {
  return (
    <div className={containerStyle}>
      <div className={featuresItemStyle}>
        <div className={lineStyle}>{props.title}</div>
        <div className={`${textStyle}`}> {props.text}</div>
      </div>
    </div>
  )
}