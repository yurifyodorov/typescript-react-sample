import React from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './components/Card/Card';
import Button from './components/Button/Button';
import ArticleList from './components/ArticleList/ArticleList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card title="Welcome!" paragraph="To this example" />
        <Button text="кнопка" />
        <ArticleList children />
      </header>
    </div>
  );
}

export default App;
