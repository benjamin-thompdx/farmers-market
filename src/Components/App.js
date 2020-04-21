import React from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import Container from './Container/Container'
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Container />
      <Footer />
    </React.Fragment>
  )
}

export default App;