/*** examples/src/index.js ***/
import React from "react";
import { render } from "react-dom";
import MyComponent from "../../src";
const App = () => {
  const handleLogout = (props) => {
    console.log("退出回调: ", props);
  };
  const handleSetting = () => {
    console.log("设置回调");
  };
  const handleOnlineConsulting = () => {
    console.log("在线咨询回调");
  };
  return (
    <MyComponent logout={handleLogout}>
      <li
        onClick={() => {
          handleSetting();
        }}
      >
        设置
      </li>
      <li
        onClick={() => {
          handleOnlineConsulting();
        }}
      >
        在线咨询
      </li>
    </MyComponent>
  );
};
render(<App />, document.getElementById("root"));
