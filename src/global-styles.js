import { createGlobalStyle } from "styled-components";
import { defaultColors } from "./pages/themes/default";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body {
        height: 100%;
        background-color: rgba(47, 47, 47, 0.03);
    }

    .app {
        ${defaultColors}
    }
`;
