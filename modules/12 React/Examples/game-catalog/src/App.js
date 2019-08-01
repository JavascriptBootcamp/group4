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
      <Header title="Game Catalog" className="row"></Header>
      <Main mainImage={image} className="row"></Main>
      <Footer symbol="Copyrights: " data="All Rights Reserved" year="2019" className="row"></Footer>
    </div>
  );
}

// export default App;