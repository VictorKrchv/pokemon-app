import React, { useState } from "react";
import { PageNumber } from "../atoms/pageNumber";
import styled from "styled-components";
import { Button } from "../../../ui";

export const Pagination = React.memo(
  ({ totalPages, count, onPageChanged, disabled, currentPage }) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    const usePaginatorRange = (initialValue, count) => {
      const [rangeValue, setRange] = useState(initialValue);
      const plusRange = () => {
        if (totalPages - count <= rangeValue) return false;
        setRange(rangeValue + count);
      };
      const minusRange = () => {
        if (rangeValue <= 0) return false;
        setRange(rangeValue - count);
      };
      return { rangeValue, plusRange, minusRange };
    };

    const handleClick = (i) => {
      if (disabled) return false;
      onPageChanged(i);
    };

    const { rangeValue, plusRange, minusRange } = usePaginatorRange(0, count);
    const paginatorRange = pages.splice(rangeValue, count);

    return (
      <PaginationContainer>
        <Button onClick={minusRange}>Prev</Button>
        <PagesBox>
          {paginatorRange.map((i) => (
            <PageNumber
              active={currentPage === i}
              onClick={() => handleClick(i)}
              key={i}
            >
              {i}
            </PageNumber>
          ))}
        </PagesBox>
        <Button onClick={plusRange}>Next</Button>
      </PaginationContainer>
    );
  }
);

const PaginationContainer = styled.div`
  padding: 15px 30px;
  display: flex;
`;

const PagesBox = styled.div`
  display: inline-block;
`;
