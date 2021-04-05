import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    items: 0,
  };

  componentDidMount() {
    console.log("App-componentDidMount");

    // using promise here
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "GET",
    })
      .then((response) => {
        return response.text();
      })
      .then((response) => {
        console.log(JSON.parse(response));
      })
      .catch((err) => {
        console.log(err);
      });

    // using async/await here and if we want

    // (async () => {
    //   let todos = await fetch("https://jsonplaceholder.typicode.com/todos", {
    //     method: "GET",
    //   });
    //   console.log(JSON.parse(todos));

    //   todos = await todos.text();
    //   todos = JSON.parse(todos);
    //   this.setState({
    //     items: todos,
    //   });
    //   console.log(JSON.parse(todos));
    // })();
  }

  componentDidUpdate() {
    console.log("App-componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("App-componentWillUnmount");
  }

  render() {
    return (
      <div className="App">
        {" "}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (

//   );
// }

// export default App;
