import styled, { css } from "styled-components";
import { mixins } from "../../lib/styled-components-layout";

export const Col = styled.div`
  flex: 1 1 auto;
  ${mixins}
  display: flex;
  flex-direction: column;

  ${(p) =>
    p.gap &&
    css`
      & > :not(:first-child) {
        margin-top: ${p.gap};
      }
    `}
`;
