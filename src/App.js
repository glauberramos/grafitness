import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import "./App.css";
import calculator from "./calculator";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monthSalary: 5000,
      monthSaving: 5000,
      portfolio: 20000
    };
  }

  onChangePortfolio(event) {
    const parsedValue = parseInt(event.target.value, 10);

    if (parsedValue) {
      this.setState({ portfolio: parsedValue });
    }
  }

  onChangeSaving(event) {
    const parsedValue = parseInt(event.target.value, 10);

    if (!parsedValue || parsedValue === 0) {
      this.setState({ monthSaving: 1000 });
    } else {
      this.setState({ monthSaving: parsedValue });
    }
  }

  onChangeSalary(event) {
    const parsedValue = parseInt(event.target.value, 10);

    if (!parsedValue || parsedValue === 0) {
      this.setState({ monthSalary: 1000 });
    } else {
      this.setState({ monthSalary: parsedValue });
    }
  }

  render() {
    return (
      <div className="App">
        <label>
          <TextField
            label="Portfolio"
            onChange={this.onChangePortfolio.bind(this)}
            value={this.state.portfolio}
          />
        </label>
        <label>
          <TextField
            label="Investimento por mês"
            onChange={this.onChangeSaving.bind(this)}
            value={this.state.monthSaving}
          />
        </label>
        <label>
          <TextField
            label="Salário esperado"
            onChange={this.onChangeSalary.bind(this)}
            value={this.state.monthSalary}
          />{" "}
        </label>
        <p>
          {calculator(
            this.state.monthSalary,
            this.state.monthSaving,
            this.state.portfolio
          )}
        </p>
      </div>
    );
  }
}

export default App;
