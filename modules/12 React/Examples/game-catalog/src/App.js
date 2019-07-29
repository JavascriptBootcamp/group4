import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { Footer } from './components/Footer';

export function App() {
  let image = {
    title: "FIFA",
    src: "https://wallpapersite.com/images/pages/pic_w/11324.jpg"
  };
  return (
    <div className="container">
      <Header title="Game Catalog" className="row" />
      <Main mainImage={image} className="row" />
      <Footer symbol="Copyrights: " data="All Rights Reserved" year="2019" className="row" />
    </div>
  );
}

// export default App;