import styled, { css } from "styled-components";
import { mixins } from "../../lib/styled-components-layout";

const styles = css`
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "inherit")};
  text-align: ${(props) => (props.center ? "center" : "inherit")};
`;

export const H2 = styled.h2`
  ${mixins}
  ${styles}
`;

export const H3 = styled.h2`
  ${mixins}
  ${styles}
`;

export const H4 = styled.h4`
  ${mixins}
  ${styles}
`;

export const H5 = styled.h5`
  ${mixins}
  ${styles}
`;
