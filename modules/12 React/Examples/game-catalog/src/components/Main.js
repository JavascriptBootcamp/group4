import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 60
        };
        this.startCountDown();
    }
    startCountDown() {
        setInterval( () => {
            if (this.state.timer > 0) {
                let updatedTimer = this.state.timer;
                updatedTimer = updatedTimer - 1;
                this.setState({ timer: updatedTimer });
            }
        }, 1000 );
    }
    render() {
        const cssPadding = 0;
        const { src, title } = this.props.mainImage;
        return (
            <div className="col-sm-12">
                <div className="row">
                    Menu { this.state.timer }
                </div>
                <div className="row">
                    <img
                    src={ src }
                    title={ title }
                    alt={ title }
                    className="col-sm-12"
                    style={{ padding: cssPadding, margin: 0, borderColor: 'red', borderWidth: 4, borderStyle: 'solid' }} />
                </div>
            </div>
        );
    }
}

export default Main;