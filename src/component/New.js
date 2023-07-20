import React, { Component } from "react";
import "../App.css";

export class New extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.value);
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="content">
            {this.props.value.map((item, index) => {
              return (
                <div key={index}>
                  <span>
                    Name: {item.name} | Dept: {item.dept} | Rating {item.rating}
                  </span>
                </div>
              );
            })}
            
          </div>
        </div>
        <div className="goback">
          <div className="button">

        <button onClick={this.props.togglefunc} className="btn">go back</button>
          </div>
        </div>
      </>
    );
  }
}

export default New;
