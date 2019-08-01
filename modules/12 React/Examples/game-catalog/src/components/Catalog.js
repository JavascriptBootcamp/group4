import React from 'react';
import Game from './Game';

const Catalog = ({ games, onAddToWishList, onRemoveGame }) => (
    games.map((game, key) => (
        game.isVisible ?
        <Game
            game={game}
            key={key}
            onAddToWishList={onAddToWishList}
            onRemoveGame={onRemoveGame} />
            : null
    ))
);

export default Catalog;