import React, { Component } from "react";
import "./top.css";
import logo from "../../static/imgs/vue.png";

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="top">
        <div className="logo">
          <img src={logo} alt="" />
          <span>Vue.js</span>
        </div>
        <div className="search">
          <input className="searchInput" placeholder="search" type="text" />
        </div>
        <div className="lists">
          <span>首页</span>
          <span>微信公众号</span>
          <span>VUE2.0</span>
          <span>参考资料</span>
          <span>API</span>
          <span>关于</span>
          <span>注册</span>
          <span>登录</span>
        </div>
      </div>
    );
  }
}

export default Top;
