import React from 'react';
import '../styles/SidebarOption.css';

function SidebarOption({ Icon, title, number, selected }) { // props distructured
    return (
        // <div className="sidebarOption"> // for default selected, we transform the class to ...
        <div className={`sidebarOption ${selected && "sidebarOption--active"}`}> 
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    );
}

export default SidebarOption;
