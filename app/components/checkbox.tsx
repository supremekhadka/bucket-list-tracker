import './checkbox.css';

export default function Checkbox(props: any) {
  return (
    <div className="checkbox-wrapper-19">
        <input id={props.index} type="checkbox" />
        <label className="check-box" htmlFor={props.index}></label>
    </div>
  )
}
