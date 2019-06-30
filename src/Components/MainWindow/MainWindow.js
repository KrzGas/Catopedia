import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { CatImage } from "../CatImage/CatImage";
import { CatFacts } from "../CatFacts/CatFacts";
import { CatQuote } from "../CatQuote/CatQuote";

export const MainWindow = () => {
  return (
    <main className="main__window">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cat-images" component={CatImage} />
        <Route path="/cat-facts" component={CatFacts} />
        <Route path="/cat-quote" component={CatQuote} />
      </Switch>
    </main>
  );
};
