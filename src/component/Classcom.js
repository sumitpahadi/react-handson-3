import React, { Component } from "react";
import "../App.css";
import New from "./New";

class Classcom extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      Dept: "",
      Rating: "",
      clicked: true,
      Empdata: [],
    };
  }

  handleonchange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    e.preventDefault();
  };

  togglefunction = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handlechange = (e) => {
    e.preventDefault();
    const empobject = {
      name: this.state.Name,
      dept: this.state.Dept,
      rating: this.state.Rating,
    };
    const updatedEmpdata = [...this.state.Empdata, empobject];

    this.setState({
      Empdata: updatedEmpdata,
      Name: "",
      Dept: "",
      Rating: "",
      clicked: false,
    });

    console.log(this.state.Empdata);
  };

  render() {
    return (
      <>
        {this.state.clicked ? (
          <>
            <div className="heading">
              <h1>Employee Feedback Form</h1>
            </div>

            <div className="top-container">
              <form>
                <label htmlFor="name">Name :</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter name"
                  name="Name"
                  value={this.state.Name}
                  onChange={this.handleonchange}
                  required
                />
                <br />
                <label htmlFor="dept">Department :</label>
                <input
                  type="text"
                  id="dept"
                  placeholder="Enter department"
                  name="Dept"
                  value={this.state.Dept}
                  onChange={this.handleonchange}
                  required
                />
                <br />
                <label htmlFor="rating">Rating :</label>
                <input
                  type="text"
                  id="rating"
                  placeholder="Enter rating"
                  name="Rating"
                  value={this.state.Rating}
                  onChange={this.handleonchange}
                  required
                />
                <br />

                <button onClick={this.handlechange} className="btn1">
                  Submit
                </button>
              </form>
            </div>
          </>
        ) : (
          <New value={this.state.Empdata} togglefunc={this.togglefunction} />
        )}
      </>
    );
  }
}

export default Classcom;
