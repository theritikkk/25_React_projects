import MenuItem from "./menu-item";

export default function MenuList({ list = [] }) {
    return (
        <ul className="menu-list-container">
            {
                list && list.length > 0 
                ? list.map(item => <MenuItem key={item.label} item={item} />) 
                : null
            }
        </ul>
    );
}
