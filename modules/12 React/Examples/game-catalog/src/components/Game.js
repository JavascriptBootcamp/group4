import React from 'react';

class Game extends React.Component {
    timeInterval = null;
    constructor(props) {
        super(props);
        this.state = {
            timer: this.props.game.endIn,
            // title: this.props.game.title,
        };
    }
    componentDidMount() {
        this.startCountDown();
    }
    componentWillUnmount() {
        clearInterval(this.timeInterval);
    }
    startCountDown() {
        this.timeInterval = setInterval(() => {
            if (this.state.timer > 0) {
                this.setState({
                    timer: --this.state.timer
                })
            }
            else if (this.state.timer === 0) {
                this.props.onRemoveGame(this.props.game);
            }
            // console.log('this.state.title', this.state.title);
        }, 1000);
    }
    render() {
        const { game, game: { title, image, isInWishList }, onAddToWishList } = this.props;
        return (
            <div className="col-sm-4">
                <h1>{title}</h1>
                <h5>Ends in: {this.state.timer} </h5>
                <img src={image} />
                <button className="btn btn-primary" onClick={() => onAddToWishList(game)}>
                    Add To Wishlist
                </button>
                Wishlist: {isInWishList.toString()}
            </div>
        )
    }
}

export default Game;