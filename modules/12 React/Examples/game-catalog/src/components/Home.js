import React from 'react';
import Catalog from './Catalog';

const Home = ({ games, addToWishList, removeGame  }) => (
    <Catalog
        games={games}
        onAddToWishList={addToWishList}
        onRemoveGame={removeGame} />
)

export default Home;