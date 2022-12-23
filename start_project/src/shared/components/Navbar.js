import React, { useState } from "react";

import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import styled from "styled-components";

const Navbar = () => {
  const [dropdown, setDropdown] = useState("sign");
  const dropdownHandler = () => {
    if (dropdown === "sign") {
      setDropdown("sign active");
    }
    if (dropdown === "sign active") {
      setDropdown("sign");
    }
  };

  return (
    <Wrapper>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="search">
        <BiSearch></BiSearch>
        <div className="input">
          <input type="text" placeholder="검색..."></input>
        </div>
      </div>
      <div className="list">
        <h5>커뮤니티</h5>
        <div className={dropdown} onClick={dropdownHandler}>
          <FaUserAlt></FaUserAlt>
          <div className="option">
            <div>로그인</div>
            <div>회원가입</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background: #999;
  box-shadow: 0 15px 15px rgba(0, 0, 0, 0.1);

  .logo {
    font-size: 2rem;
    color: #fff;
  }

  .search {
    position: relative;
    width: 360px;
    height: 50px;
    background: #fff;
    border-radius: 60px;
    overflow: hidden;
  }
  .search svg {
    position: absolute;
    top: 20%;
    left: 3%;
    width: 30px;
    height: 30px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    cursor: pointer;
  }
  .input {
    position: relative;
    width: 300px;
    height: 50px;
    left: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .input input {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }

  .list {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .list h5 {
    padding-right: 2rem;
    font-size: 1.2rem;
  }

  .sign {
    position: relative;
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .sign::before {
    content: "";
    position: absolute;
    top: 25px;
    right: 28px;
    width: 12px;
    height: 2px;
    z-index: 10;
    background: black;
    transform: rotate(40deg);
    transition: 0.5s;
  }
  .sign.active::before {
    right: 20px;
  }
  .sign::after {
    content: "";
    position: absolute;
    top: 25px;
    right: 20px;
    width: 12px;
    height: 2px;
    z-index: 10;
    background: black;
    transform: rotate(-40deg);
    transition: 0.5s;
  }
  .sign.active::after {
    right: 28px;
  }
  .sign.active .option {
    visibility: visible;
    opacity: 1;
  }
  .sign svg {
    font-size: 1.4rem;
  }

  .option {
    position: absolute;
    width: 100%;
    top: 70px;
    background: #999;
    color: #fff;
    font-weight: 700;
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;
  }
  .option div {
    padding: 12px 20px;
    cursor: pointer;
  }
  .option div:hover {
    background: #fff;
    color: black;
  }
`;

export default Navbar;
