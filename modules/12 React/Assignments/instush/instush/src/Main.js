import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPhotoIndex : 0
        };
        this.timer();
    }
    timer() {
        setInterval( () => {
            this.changePhoto();
        }, 5000 );
    }
    changePhoto(){
        if(this.state.currentPhotoIndex<this.props.photos.length-1){
            this.setState({currentPhotoIndex
                 : this.state.currentPhotoIndex +1});
        }
        else{
            this.setState({currentPhotoIndex : 0});
        }
    }
    render() {
        const photos= this.props.photos;
        return (
            <div className="img-wrapper">
                <img
                src={ photos[this.state.currentPhotoIndex].src }
                title={ photos[this.state.currentPhotoIndex].title }
                alt={ photos[this.state.currentPhotoIndex].title  }
                className="img" />
            </div>
        );
    }
}

export default Main;