import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ key, item, children }) => (
    <li key={key} className="nav-item col-sm-4">
        {/* <a className="nav-link" href="#"> */}
            {/* {item} {children} */}
            {/* { item } */}
        {/* </a> */}
        <Link className="nav-link" to={ item.toLowerCase() }>
            { item }
        </Link>
    </li>
);

// class MenuItem extends React.Component {
//     render() {
//         return (<li key={this.props.key} className="nav-item col-sm-4">
//             <a className="nav-link" href="#">
//                 {this.props.item}
//             </a>
//             {this.props.children}
//         </li>)
//     }
// }

export default MenuItem;