import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const MainTemplate = ({ header, children }) => {
  return (
    <MainContainer>
      {header}
    {children}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  min-height: 100vh;
  max-height: 100vh;
`;


MainTemplate.propTypes = {
  header: PropTypes.node,
  children: PropTypes.node.isRequired,
};
