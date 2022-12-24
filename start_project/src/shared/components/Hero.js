import React from "react";

import IMG1 from "../../assets/project.png";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <div className="info">
        <h2>프로젝트 이름</h2>
        <p>상황에 맞는 스터디와 프로젝트를 매칭해드립니다</p>
      </div>
      <div className="hero">
        <img src={IMG1}></img>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--c-white-green-pri);
  padding: 0 5rem;

  .info {
    display: flex;
    flex-direction: column;
  }
  .info h2 {
    margin-bottom: 2rem;
    color: #fff;
    font-size: 2rem;
  }
  .info p {
    color: #777;
    font-size: 1.2rem;
  }

  .hero img {
    height: 20rem;
    margin-right: 5rem;
  }
`;

export default Hero;
