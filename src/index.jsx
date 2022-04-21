/*** src/index.js  ***/
import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

const MyComponent = (props) => {
  const { logout, children } = props;
  console.log("children: ", children);
  const [isLogin, setIsLogin] = useState(true);
  const renderUnLogin = () => {
    return (
      <div className={styles.unLogin}>
        <span className={styles.unUserIcon}></span>
        <span className={styles.unLoginText}>登录/注册</span>
      </div>
    );
  };
  const renderLogin = () => {
    return (
      <div className={styles.login}>
        <span className={styles.avatar}></span>
        <p className={styles.nickName}>小明</p>
        <div className={styles.personCenter}>
          <div className={styles.empty}></div>
          <div className={styles.personCenterContent}>
            <ul className={styles.menuList}>
              {props.children}
              <li className={styles.menuItem}>功能1</li>
            </ul>
          </div>
          <div
            className={styles.logoutBtn}
            onClick={() => {
              logout("退出啦");
            }}
          >
            退出登录
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className={styles.userInfo}>
      {!isLogin ? renderUnLogin() : renderLogin()}
    </div>
  );
};
export default MyComponent;
