import React from "react";
import styled from "styled-components";

export const StatItem = ({ stat }) => {
  return (
    <StatItemBox>
      <StatItemName>{stat.name.toUpperCase()}:</StatItemName> {stat.base_stat}
    </StatItemBox>
  );
};

const StatItemBox = styled.li`
  margin-top: 2px;
`;
const StatItemName = styled.span`
  font-weight: 600;
`;
