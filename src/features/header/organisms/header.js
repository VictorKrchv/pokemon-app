import React from "react";
import styled from "styled-components";
import { H2, Container, Link } from "../../../ui";
import { valueChanged, $searchValue } from "../models/search";
import { useStore } from "effector-react";
import { Search } from "../molecules/search";
import { useHistory } from "react-router-dom";

export const Header = () => {
  const value = useStore($searchValue);
  const history = useHistory();
  const handleSubmit = () => {
    history.push("/");
  };
  return (
    <HeaderBox>
      <Container>
        <HeaderInner>
          <Link to="/">
            <H2 color="#fff" uppercase>
              Покедекс
            </H2>
          </Link>
          <Search
            handleSubmit={handleSubmit}
            value={value}
            onChange={valueChanged}
            text="Искать"
          />
        </HeaderInner>
      </Container>
    </HeaderBox>
  );
};

const HeaderBox = styled.header`
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  box-sizing: border-box;
  box-shadow: 0 -1rem 4rem rgba(36, 37, 38, 0.3);
  background-color: #313131;
  color: white;
`;
const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
