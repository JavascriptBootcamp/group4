import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="jumbotron col-sm-12">
                <h1 className="display">{ this.props.title }</h1>
                <p className="lead">The best games are here!</p>
            </div>
        );
    }
}

export default Header;