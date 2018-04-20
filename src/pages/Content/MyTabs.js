import React, { Component } from "react";
import { Tabs, WhiteSpace } from "antd-mobile";

class MyTabs extends React.Component {
  renderContent = tab => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "150px",
        backgroundColor: "#fff"
      }}
    >
      <p>Content of {tab.title}</p>
    </div>
  );

  render() {
    const tabs = [
      { title: "全部" },
      { title: "精华" },
      { title: "weex" },
      { title: "分享" },
      { title: "问答" },
      { title: "招聘" }
    ];

    return (
      <div>
        <WhiteSpace />
        <Tabs
          tabs={tabs}
          renderTabBar={props => <Tabs.DefaultTabBar {...props} page={6} />}
        >
          {this.renderContent}
        </Tabs>
        <WhiteSpace />
      </div>
    );
  }
}
export default MyTabs;
