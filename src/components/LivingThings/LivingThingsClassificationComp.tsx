import { c2ContainerStyle, c2TextStyle, classificationItemStyle } from 'src/components/styles/eachOne.css';

interface Props {
  classification1: string;
  classification2: string;
  text?: string;
}

export function LivingThingsClassificationComp(props: Props) {
  return (
    <span className={classificationItemStyle}>
      <div>
        <div >{props.classification1}</div>
      </div>
      <div className={c2ContainerStyle}>
        <div className={c2TextStyle}> {props.classification2}</div>
      </div>
    </span>
  )
}