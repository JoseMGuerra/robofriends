import React, { Component } from "react";
import {
  CardList,
  SearchBox,
  Scroll,
  ErrorBoundary,
} from "../components/index.js";
import { robots } from "../robots.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: robots }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1 className="tc">Loading...</h1>
    ) : (
      <div className="tc">
        <header>
          <h1 className="f1">Robot Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
        </header>
        <main>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </main>
      </div>
    );
  }
}

export default App;
