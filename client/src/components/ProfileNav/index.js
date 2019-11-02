import React from "react";

function Nav(props) {
    return (
        <ul className="list-group">
            {props.links.map(link => {
                if (link.name === props.active) {
                    return (
                        <li className="list-group-item bg-info p-0">
                            <button class="btn btn-clear text-light" onClick={() => props.handleClick(link.name)}>{link.name}</button>
                        </li>
                    )
                } else {
                    return (
                        <li className="list-group-item bg-secondary p-0">
                            <button class="btn btn-clear text-light" onClick={() => props.handleClick(link.name)}>{link.name}</button>
                        </li>
                    )
                }
            })}
        </ul>
    );
}

export default Nav;