import './item.css';
import Checkbox from "./checkbox";

export default function Item(props: any) {
  return (
    <div className="w-full flex items-center gap-5">
      <div className="item">
          <p className="item_text">{props.value}</p>
          <button className="delete_icon" onClick={() => props.handleDelete(props.index)}>
              <svg xmlns="http://www.w3.org/2000/svg" width={24} fill='white' id="delete" x="0" y="0" version="1.1" viewBox="0 0 29 29" className='svg'>
                  <path d="M10 3v3h9V3a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1z"></path>
                  <path d="M4 5v1h21V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1zM6 8l1.812 17.209A2 2 0 0 0 9.801 27H19.2a2 2 0 0 0 1.989-1.791L23 8H6zm4.577 16.997a.999.999 0 0 1-1.074-.92l-1-13a1 1 0 0 1 .92-1.074.989.989 0 0 1 1.074.92l1 13a1 1 0 0 1-.92 1.074zM15.5 24a1 1 0 0 1-2 0V11a1 1 0 0 1 2 0v13zm3.997.077a.999.999 0 1 1-1.994-.154l1-13a.985.985 0 0 1 1.074-.92 1 1 0 0 1 .92 1.074l-1 13z"></path>
              </svg>
          </button>
      </div>
      <Checkbox index={props.index} checked={props.checked} onChange={(isChecked: boolean) => props.handleCheckboxChange(props.index, isChecked)} />
    </div>
  )
}
