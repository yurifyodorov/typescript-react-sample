import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import ArticleList from "./components/ArticleList/ArticleList";
import Counter from "./components/Counter/Counter";
import Display from "./components/Display/Display";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main className="App-main">
        <Card title="Welcome!" paragraph="To this example" />
        <Button text="кнопка" />
        <ArticleList children />
        <Counter />
        <Display />
      </main>
    </div>
  );
}

export default App;
