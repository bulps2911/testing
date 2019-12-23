import React from "react";
import axios from "axios";
import "./Card.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numbers: []
    };
  }

  componentDidMount() {
    axios
      .get("https://skin-deep.herokuapp.com/productsapi")
      .then(result => {
        return result.data.finalResult.map(each => ({
          number: `${each.shadeName}`
        }));
      })
      .then(newData => {
        this.setState({ numbers: newData });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="Gallery">
        {this.state.numbers.map((each, idx) => (
          <div className="Card" key={idx}>
            <p>{each.number}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Card;
