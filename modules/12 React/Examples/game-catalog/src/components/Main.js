import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Menu from './Menu';
import MainImage from './MainImage';
import { About } from './About';
import Contact from './Contact';
import Catalog from './Catalog';
import games from '../data/games';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 60,
            games
        };
        // this.startCountDown();
    }
    addToWishList = game => {
        game.isInWishList = true;
        this.setState({
            games
        });
    }
    removeGame = game => {
        // const newGames = [...this.state.games];
        // const index = newGames.findIndex( g => g === game );
        // newGames.splice(index, 1);
        // newGames.splice(index, 1, {
        //     title: "Some Title"
        // });
        game.isVisible = false;
        this.setState({
            games
        });
    }
    // startCountDown() {
    //     setInterval( () => {
    //         if (this.state.timer > 0) {
    //             let updatedTimer = this.state.timer;
    //             updatedTimer = updatedTimer - 1;
    //             this.setState({ timer: updatedTimer });
    //         }
    //     }, 1000 );
    // }
    render() {
        // this.setState({timer: 50}); // will cause an infinite loop
        const { src, title } = this.props.mainImage;
        return (
            <div className="col-sm-12">
                <div className="row">
                   <Menu listOfItems={ ["Home", "About", "Contact"] }></Menu>
                </div>
                <div className="row">
                    <MainImage src={ src } title={ title } />
                </div>
                <div className="row">
                    <Route exact path="/" render={ () => (
                        <Catalog
                        games={ this.state.games }
                        onAddToWishList={ this.addToWishList }
                        onRemoveGame={this.removeGame} />
                    ) } />
                    <Route path="/home" render={ () => (
                        <Redirect to="/" />
                    ) } />
                    <Route path="/about" component={ About } />
                    <Route path="/contact" component={ Contact } />
                     
                </div>
                {/* <WishList /> */}
            </div>
        );
    }
}

export default Main;