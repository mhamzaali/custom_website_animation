import React from 'react';
import './App.css';
import {Header} from './Components/Header'
import FirstCover from './Components/FirstCover';
import SecondCover from './Components/SecondCover';
import Third from './Components/Third';
import Four from './Components/Four';
import Title from './Components/Title';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Title />
      <FirstCover />
      <SecondCover />
      <Third />
      <Four />
      <Footer />
    </div>
  );
}

export default App;
