import React, {Component} from 'react';
import MenuItem from './MenuItem';

class Menu extends Component {
    render() {
        return (<ul className="nav">
            { this.props.listOfItems.map( (item, key) => (
                // <li key={key} className="nav-item col-sm-4">
                //     <a className="nav-link" href="#">
                //         { item }
                //     </a>
                // </li>
                <MenuItem key={key} item={item}>
                    <span> > </span>
                </MenuItem>
            ))}
        </ul>)
    }
}

export default Menu;