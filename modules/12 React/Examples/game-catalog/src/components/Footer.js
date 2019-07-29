import React from 'react';

export function Footer({ symbol, data: text, year }) {
    return (
        <div>{symbol} { text } {year}</div>
    )
}

// class Footer extends React.Component {
//     render() {
//         this.props.year = 2022;
//         console.log(this.props);
//         return (
//             <div>All Rights Reserved2</div>
//         )
//     }
// }

// export default Footer;