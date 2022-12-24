import React from "react";

import styled from "styled-components";

const HomeFilter = () => {
  return (
    <Wrapper>
      <button className="mozip">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        모집하기
      </button>
      <div className="filter">
        <h3>Filter</h3>
        <div className="filter__stack">
          <button>백엔드</button>
          <button>프론트엔드</button>
          <button>그외...</button>
        </div>
        <div className="filter__local">
          <button>지역 찾아보기</button>
        </div>
        <div className="filter__lan">
          <ul>
            <li>#Javascript</li>
            <li>#React</li>
            <li>#Vue</li>
            <li>#Angular</li>
            <li>#HTML&CSS</li>
          </ul>
        </div>
        <div className="state">
          <button>프로젝트</button>
          <button>모각코</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-left: 1rem;

  .mozip {
    position: relative;
    background: transparent;
    width: 200px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #999;
    margin-bottom: 1.5rem;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 700;
    color: #999;
    transition: 0.5s;
  }
  .mozip:hover {
    color: black;
    border: none;
  }
  .mozip span {
    display: block;
    position: absolute;
    background: var(--c-green);
  }
  .mozip span:nth-child(1) {
    left: 0;
    bottom: 0;
    width: 3px;
    height: 100%;
    transform: scaleY(0);
    transform-origin: top;
    transition: 0.5s;
  }
  .mozip:hover span:nth-child(1) {
    transform: scaleY(1);
    transform-origin: bottom;
    transition: 0.5s;
  }
  .mozip span:nth-child(2) {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    transform: scaleX(0);
    transform-origin: top;
    transition: 0.5s;
  }
  .mozip:hover span:nth-child(2) {
    transform: scaleX(1);
    transform-origin: bottom;
    transition: 0.5s;
  }
  .mozip span:nth-child(3) {
    right: 0;
    bottom: 0;
    width: 3px;
    height: 100%;
    transform: scaleY(0);
    transform-origin: top;
    transition: 0.5s;
  }
  .mozip:hover span:nth-child(3) {
    transform: scaleY(1);
    transform-origin: bottom;
    transition: 0.5s;
  }
  .mozip span:nth-child(4) {
    left: 0;
    top: 0;
    width: 100%;
    height: 3px;
    transform: scaleX(0);
    transform-origin: top;
    transition: 0.5s;
  }
  .mozip:hover span:nth-child(4) {
    transform: scaleX(1);
    transform-origin: bottom;
    transition: 0.5s;
  }

  .filter {
    width: 5rem;
    height: 30rem;
  }
  .filter h3 {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export default HomeFilter;
