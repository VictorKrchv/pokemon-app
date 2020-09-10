import React from "react";
import { MainTemplate, Container } from "../../../ui";
import { Header } from "../../header";
import { CommonTemplate } from "../../../ui";

export const HomeCommonPage = ({ children }) => {
  return (
    <MainTemplate header={<Header />}>
      <Container>
        <CommonTemplate>{children}</CommonTemplate>
      </Container>
    </MainTemplate>
  );
};
