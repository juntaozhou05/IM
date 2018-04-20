import React, { Component } from "react";

import "./content.css";
import MyTabs from "./MyTabs";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="content">
        <MyTabs />
      </div>
    );
  }
}

export default Content;
