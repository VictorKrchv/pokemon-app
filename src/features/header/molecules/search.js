import React from "react";
import { Button, Input } from "../../../ui";
import styled from "styled-components";

export const Search = ({ text, value, onChange, handleSubmit }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <SearchForm onSubmit={onSubmit}>
      <Input autoComplete="off" value={value} onChange={onChange} />
      <Button>{text}</Button>
    </SearchForm>
  );
};

const SearchForm = styled.form`
  display: flex;
  justify-content: space-between;
`;
