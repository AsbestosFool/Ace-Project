import { Children } from "react";

export default function TabButton({children, onSelect, isSelected}) {

    return (
       <li>
        <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
       </li>
    );
}