import styled, { css } from "styled-components";
import { mixins } from "../../lib/styled-components-layout";

export const Row = styled.div`
    ${mixins}
    display: flex;
    flex-direction: row;

    ${(p) =>
    p.gap &&
    css`
      & > :not(:first-child) {
        margin-left: ${p.gap};
      }
    `}
`