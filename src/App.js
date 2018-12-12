import React, { Component } from 'react';
import '../src/styles/themes.css';
import Header from './component/navbar';
import Content from './pages/content'
import Footer from './component/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
      </div>
    );
  }
}

export default App;
