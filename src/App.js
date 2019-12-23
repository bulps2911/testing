import React from "react";
import "./App.css";
import Card from "./components/Card1";
function App() {
  // componentDidMount() {
  //   axios
  //     .get("https://skin-deep.herokuapp.com/testingapi")
  //     .then(result => {
  //       return result.data.finalResult.map(each => ({
  //         number: `${each}`
  //       }));
  //     })
  //     .then(newData => {
  //       //update state here, re-calls render
  //       this.setState({ products: newData });
  //     })
  //     .catch(err => console.log(err));
  // }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hellu</h1>
      </header>
        <body>
          <Card/>
        </body>
    </div>
  );
}

export default App;
