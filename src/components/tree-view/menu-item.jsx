import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from 'react-icons/fa';

export default function MenuItem({ item }) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    // Toggle display of children for a given menu item
    function handleToggleChildren(label) {
        setDisplayCurrentChildren(prev => ({
            ...prev,
            [label]: !prev[label],
        }));
    }

    return (
        <li>
            <div className="menu-item">
                <p>{item.label}</p>

                {
                    item.children && item.children.length > 0 && (
                        <span onClick={() => handleToggleChildren(item.label)}>
                            {displayCurrentChildren[item.label] 
                                ? <FaMinus color="#fff" size={20} /> 
                                : <FaPlus color="#fff" size={20} />}
                        </span>
                    )
                }
            </div>

            {
                item.children && item.children.length > 0 && displayCurrentChildren[item.label] && (
                    <MenuList list={item.children} />
                )
            }
        </li>
    );
}
